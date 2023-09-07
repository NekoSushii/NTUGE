import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {db} from '../firebase'
import {collection, addDoc, getDocs, getDoc, updateDoc,deleteDoc ,Timestamp} from 'firebase/firestore'
import { toast} from "react-toastify";
var md5 = require('md5')

function Login(){

    let navigate = useNavigate();
    const initialValues = {username: '', password: ''}
    const [loginlist, setloginlist] =useState([])
    const [logindetails,setlogindetails] =useState([])
    const [loginPW, setloginPW] =useState([])

    useEffect(()=>{
        async function fetchstuff(){
            // let stuff = await getDocs(collection(db,'NTUGE')).docs
            // console.log(stuff.map((val,key)=>{
            // }))
            await getDocs(collection(db,'NTUGE'))
            .then(response=>{
                let temp = response.docs.map((val,key)=>({data: val.data()}))
                let templist = []
                let templist2 = []
                let templist3 = []
                for(let i=0;i<temp.length;i++){
                    templist.push(temp[i].data.username)
                    templist2.push(temp[i].data.name)
                    templist3.push(temp[i].data.password)
                    setloginlist(templist)
                    setlogindetails(templist2)
                    setloginPW(templist3)
                    console.log(templist3)
                }
            })
        }
        fetchstuff()
    },[])
    
    function validationSchema() {
        return Yup.object().shape({
          username: Yup.string().required("Username required!"),
          password: Yup.string().required("Password required!"),
        });
    }

    async function handleLogin(formValue) {
        for(let i=0;i<loginlist.length;i++){
            if(loginlist[i] === formValue.username){
                console.log(i,'i')
                console.log(md5(formValue.password))
                console.log(loginPW[i],'login pw')
                if(md5(formValue.password) === loginPW[i]){
                    sessionStorage.setItem('username', formValue.username)
                sessionStorage.setItem('name', logindetails[i])
                navigate('/')
                window.location.reload()
                toast.success('Loged in as '+formValue.username)
                /* setTimeout(() => {history('/')}, 1000); */
                return
                }   
            }
        }
        toast.error('Username or password invalid')
    }

    return(
        <div className='formclass'>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
            >
                <Form>
                <div className="imgcontainer">
                <img src="login_text.png" alt="Avatar" className="avatar"/>
                </div>

                <div className='container'>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <Field name="username" type="text" className="form-control" />
                        <ErrorMessage
                        name="username"
                        component="div"
                        className="alert-danger"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" className="form-control" />
                        <ErrorMessage
                        name="password"
                        component="div"
                        className="alert-danger"
                        />
                    </div>
                </div>

                    <div className="form-group">
                        <button type="submit" className="button">
                        <span>Login</span>
                        </button>
                    </div>
                
                </Form>
            </Formik>
        </div>
    )
}

export default Login;