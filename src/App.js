import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import { Box , Container, Typography } from '@mui/material';
import Header2 from './Components/Header2'
import Header from './Components/Header.jsx'
import AppCode from './Components/AppCode';
import { Card } from '@mui/material';
import { Paper } from '@mui/material';
import ButtonCom from './Components/ButtonCom';
import GridApp from './Components/GridApp';
import {ContainerStyle} from "./CommonStyle"



function App() {

  const [message , setMessage] = useState('');
  const [message1 , setMessage1] = useState('');
  const [message2 , setMessage2] = useState('');
  const [message3 , setMessage3] = useState('');
  const [message4 , setMessage4] = useState('');
  const [message5 , setMessage5] = useState('')
  
  return (
    <div className="App">
     <Box sx={ContainerStyle}>
      <Header/>
    <Header2  setMessage={setMessage} setMessage1={setMessage1} setMessage2={setMessage2} setMessage3={setMessage3}
    setMessage4={setMessage4}  setMessage5={setMessage5}
    />
      <AppCode  message={message} message1={message1} message2={message2} message3={message3} message4={message4}  
     message5={message5}
    />
{/* <GridApp message={message} message1={message1} message2={message2} message3={message3} message4={message4}  
     message5={message5}/> */}

    {/* <Card sx={{ borderBottom:"6px solid back" , backgroundColor:"blue" , mb:"2px" , color:"white" , height:"59"}} square elevation={0}>
    <Typography sx={{float:"left" , ml:"70px" , fontSize:"19px" }} p={1} > <b>Interest Parameters</b></Typography>
    </ Card> */}

    {/* <AppCode  message={message} message1={message1} message2={message2} message3={message3} message4={message4}  
     message5={message5}
    /> */}
    {/* <Card sx={{ borderBottom:"6px solid back" , backgroundColor:"blue" ,  mb:"0px" , position:"absolute", color:"white" , height:"59"}} square elevation={0}>
    <Typography sx={{float:"left" , ml:"80px" , fontSize:"19px" }} p={1} > <b>Proceed</b></Typography>
    </ Card> */}
    </Box >
</div>
  );
}

export default App;
