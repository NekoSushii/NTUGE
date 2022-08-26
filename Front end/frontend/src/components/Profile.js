import React, { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {db} from '../firebase'
import {collection, addDoc, getDocs, getDoc, updateDoc,deleteDoc ,Timestamp} from 'firebase/firestore'
import { toast} from "react-toastify";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Profile(){

    const [username, setusername] =useState('')
    const [userdetails ,setuserdetails] =useState({})
    const [openUN, setopenUN] =useState(false)
    const [openPW, setopenPW] =useState(false)
    const [newusername, setnewusername] =useState('')
    const [newpassword, setnewpassword] =useState('')
    const [cfmpassword, setcfmpassword] =useState('')
    let navigate = useNavigate();

    useEffect(()=>{
        if(sessionStorage.getItem('username')){
            setusername(sessionStorage.getItem('name'))
            fetchstuff()
        }
        else{
            navigate('/')
            window.location.reload()
            return
        }
        async function fetchstuff(){
            await getDocs(collection(db,'NTUGE'))
            .then(response=>{
                let temp = response.docs.map((val,key)=>({data: val.data()}))
                for(let i=0;i<temp.length;i++){
                    if(temp[i].data.username === sessionStorage.getItem('username')){
                        setuserdetails(temp[i].data)
                    }
                }
            })
        }
           
      },[])

      const handleopenUN =()=>{
        setopenUN(true)
      }

      function handlecloseUN() {
        setopenUN(false)
        setnewusername('')
      }

      const handlesubmitUN =()=>{
        toast.success('Username changed')
        handlecloseUN()
      }

      const handleopenPW =()=>{
        setopenPW(true)
      }

      function handleclosePW(){
        setopenPW(false)
        setnewpassword('')
        setcfmpassword('')
      }

      const handlesubmitPW =()=>{
        if(newpassword === cfmpassword){
            toast.success('Password changed')
            handleclosePW()
        }
        else{
            toast.warning('Passwords entered are not the same!')
        }
      }

    return(
        <div>
            <div style={{display: 'inline-block', marginTop:'5%'}}>
                    <div className='bannercontainer'>
                        Welcome {username}
                    </div>
                    <div style={{float:'left', color:'white', textAlign:'left'}}>
                        <ul>
                            Username: {userdetails.username}
                        </ul>
                        <ul>
                            Email: {userdetails.email}
                        </ul>
                        <ul>
                            Appointment: {userdetails.role}
                        </ul>
                    </div>
                    <div className='form-group'>
                        <button className='button-full' onClick={handleopenUN}>Change Username</button>
                        <button className='button-full' onClick={handleopenPW}>Change Password</button>
                    </div>
            </div>
            <Dialog open={openUN} onClose={handlecloseUN}>
            <DialogTitle><strong>Change Username</strong></DialogTitle>
            <DialogContent className='portalmodal'>
                <TextField label='New Username' autoFocus margin="dense" value={newusername} onChange={(e) => setnewusername(e.target.value)} fullWidth variant="standard"></TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={handlecloseUN}>Cancel</Button>
                <Button onClick={handlesubmitUN}>Update Username</Button>
            </DialogActions>
            </Dialog>

            <Dialog open={openPW} onClose={handleclosePW}>
            <DialogTitle><strong>Change Password</strong></DialogTitle>
            <DialogContent className='portalmodal'>
                <TextField label='New Password' type="password" autoFocus margin="dense" value={newpassword} onChange={(e) => setnewpassword(e.target.value)} fullWidth variant="standard"></TextField>
                <TextField label='Confirm Password' type="password" autoFocus margin="dense" value={cfmpassword} onChange={(e) => setcfmpassword(e.target.value)} fullWidth variant="standard"></TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleclosePW}>Cancel</Button>
                <Button onClick={handlesubmitPW}>Update Password</Button>
            </DialogActions>
            </Dialog>
        </div>
    )
}

export default Profile