import React ,{useState} from 'react';
import {AppBar ,Box ,Button,Toolbar ,Typography , Grid} from '@mui/material';

function Header2({setMessage , setMessage1 ,setMessage2,  setMessage3 ,setMessage4,  setMessage5}) {
  const [showComponent1, setShowComponent1] = useState(false);
    const [showComponent2, setShowComponent2] = useState(false);
    const [showComponent3, setShowComponent3] = useState(false);
  const Clickevent =()=>{
   setMessage("Ledger")
   setMessage1(null)
   setMessage2(null)
   setMessage3(null)
   setMessage4(null)
   setMessage5(null)
  }

  const Clickevent1 =()=>{
   
    setMessage1("InputData")
    setMessage(null)
    setMessage2(null)
    setMessage3(null)
    setMessage4(null)
    setMessage5(null)
   }
 
   const Clickevent2 =()=>{
    setMessage2( "InterestMaster")
    setMessage1(null)
    setMessage(null)
    setMessage3(null)
    setMessage4(null)
    setMessage5(null)
 
   }

   const Clickevent3 =()=>{
    setMessage3( "AccountData")
    setMessage1(null)
    setMessage2(null)
    setMessage(null)
    setMessage4(null)
    setMessage5(null)
   }
   const Clickevent4 =()=>{
    setMessage4( "PartyMaster")
    setMessage1(null)
    setMessage2(null)
    setMessage3(null)
    setMessage(null)
    setMessage5(null)
   }
   const Clickevent5=()=>{
    setMessage5( "InterestData")
    setMessage1(null)
    setMessage2(null)
    setMessage3(null)
    setMessage4(null)
    setMessage(null)
   }

  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx={{zIndex:1201, backgroundColor:"white"  , color:"black" , height:"3rem" , borderBottom:"1px solid black"}} elevation={0}  >
        <Toolbar variant="dense" >
       
       
      
        <Button onClick={ Clickevent4} sx={{fontSize:"1.3rem" , textTransform:"capitalize"}}>Party Master</Button>
          <Button onClick={ Clickevent1} sx={{fontSize:"1.3rem" , textTransform:"capitalize"}}>Account Data</Button>
          <Button onClick={ Clickevent3} sx={{fontSize:"1.3rem" , textTransform:"capitalize"}}>Quick Data</Button>
       
          <Button onClick={Clickevent2} sx={{fontSize:"1.3rem" , textTransform:"capitalize"}}>Interest Master</Button>
          <Button onClick={Clickevent5} sx={{fontSize:"1.3rem" , textTransform:"capitalize"}}>Interest Data</Button>
          <Button onClick={ Clickevent} sx={{fontSize:"1.3rem" , textTransform:"capitalize"}}>Ledger</Button>
        </Toolbar>
      </AppBar>
    </Box>
  
    </div>
  )
}

export default Header2