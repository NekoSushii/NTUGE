import React, { useEffect, useState} from 'react'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import countryroad_alto1 from '../repository/Country_Road_(Alto1).pdf'
import countryroad_alto2 from '../repository/Country_Road_(Alto2).pdf'
import countryroad_altocembalo from '../repository/Country_Road_(Alto_Cembalo).pdf'
import countryroad_prime from '../repository/Country_Road_(Prime).pdf'
import countryroad_bass from '../repository/Country_Road_(Bass).pdf'
import countryroad_cbgr from '../repository/Country_Road_(CBGR).pdf'
import countryroad_wav from '../repository/Take Me Home, Country Roads.wav'
import countryroad_gp from '../repository/Take Me Home, Country Roads.gp'

import flower_alto1 from '../repository/(Alto 1) Flowers That Only Bloom Here.pdf'
import flower_alto2 from '../repository/(Alto 2) Flowers That Only Bloom Here.pdf'
import flower_altocembalo from '../repository/(Alto Cembalo) Flowers That Only Bloom Here.pdf'
import flower_prime1 from '../repository/(Prime 1) Flowers That Only Bloom Here.pdf'
import flower_prime2 from '../repository/(Prime 2) Flowers That Only Bloom Here.pdf'
import flower_bass from '../repository/(Bass) Flowers That Only Bloom Here.pdf'
import flower_cbgr from '../repository/(CbGr) Flowers That Only Bloom Here.pdf'
import flower_wav from '../repository/Flowers That Only Bloom Here.wav'
import flower_gp from '../repository/Flowers That Only Bloom Here.gp'

function Repository(){

    const [open1, setopen1] =useState(false)
    const [open2, setopen2] =useState(false)

    const handleopen1 =()=>{
        setopen1(true)
      }
      function handleclose1() {
        setopen1(false)
      }

    const handleopen2 =()=>{
        setopen2(true)
      }
      function handleclose2() {
        setopen2(false)
      }

    return(
        <div>
            <div style={{fontSize:'3rem', color:'white', font:'arial'}}>
                NTUGE 22/23 Concert Pieces
            </div>
            <div>
                <Dialog className='countryroad' open={open1} onClose={handleclose1}>
                <DialogTitle sx={{m:0,p:3}} ><strong>Country Road</strong></DialogTitle>
                <DialogContent className='portalmodal'>
                </DialogContent>
                    <a className='repo_link' href={countryroad_alto1} target='_blank' rel="noreferrer" >Alto 1 tabs</a>
                    <a className='repo_link' href={countryroad_alto2} target='_blank' rel="noreferrer" >Alto 2 tabs</a>
                    <a className='repo_link' href={countryroad_altocembalo} target='_blank' rel="noreferrer" >Alto Cembalo tabs</a>
                    <a className='repo_link' href={countryroad_prime} target='_blank' rel="noreferrer" >Prime tabs</a>
                    <a className='repo_link' href={countryroad_bass} target='_blank' rel="noreferrer" >Bass tabs</a>
                    <a className='repo_link' href={countryroad_cbgr} target='_blank' rel="noreferrer" >CBGR tabs</a>
                    <a className='repo_link' href={countryroad_wav} target='_blank' rel="noreferrer" >Wav sound file</a>
                    <a className='repo_link' href={countryroad_gp} target='_blank' rel="noreferrer" >GP file</a>
                <DialogActions>
                    <Button style={{margin:'auto'}} onClick={handleclose1}>Close</Button>
                </DialogActions>
                </Dialog>

                <Dialog className='flowerbloom' open={open2} onClose={handleclose2}>
                <DialogTitle sx={{m:0,p:3}} ><strong>Flowers That Only Bloom Here</strong></DialogTitle>
                <DialogContent className='portalmodal'>
                </DialogContent>
                    <a className='repo_link' href={flower_alto1} target='_blank' rel="noreferrer" >Alto 1 tabs</a>
                    <a className='repo_link' href={flower_alto2} target='_blank' rel="noreferrer" >Alto 2 tabs</a>
                    <a className='repo_link' href={flower_altocembalo} target='_blank' rel="noreferrer" >Alto Cembalo tabs</a>
                    <a className='repo_link' href={flower_prime1} target='_blank' rel="noreferrer" >Prime tabs</a>
                    <a className='repo_link' href={flower_prime2} target='_blank' rel="noreferrer" >Prime tabs</a>
                    <a className='repo_link' href={flower_bass} target='_blank' rel="noreferrer" >Bass tabs</a>
                    <a className='repo_link' href={flower_cbgr} target='_blank' rel="noreferrer" >CBGR tabs</a>
                    <a className='repo_link' href={flower_wav} target='_blank' rel="noreferrer" >Wav sound file</a>
                    <a className='repo_link' href={flower_gp} target='_blank' rel="noreferrer" >GP file</a>
                <DialogActions>
                    <Button style={{margin:'auto'}} onClick={handleclose2}>Close</Button>
                </DialogActions>
                </Dialog>
            </div>
            <div style={{padding:'2rem'}}>
                <input type='button' value={'Country Road'} className='button-small' onClick={handleopen1}></input>
                <input type='button' value={'Flowers That Only Bloom Here'} className='button-small' onClick={handleopen2}></input>
                
            </div>
        </div>
    )
}

export default Repository