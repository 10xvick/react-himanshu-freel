import React,{useState} from 'react';
import {Typography ,ToggleButtonGroup,ToggleButton , Button , Box , Avatar} from "@mui/material"

function ButtonCom() {
    const [alignment, setAlignment] = useState('left');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  return (
    <div>
        <Box sx={{display:"flex" , justifyContent:"center"}}>
        <Box sx={{border:"0.5px solid black" , width:"100px" , mr:"50px" ,display:"flex" ,alignItems:"center"}} p={0.8} > 
            Add Data By
        </Box>
        
            <ToggleButtonGroup
            value={alignment}
            exclusive
            color="primary"
            onChange={handleChange}
        
            >
            <ToggleButton value="Direct Entry">Direct Entry</ToggleButton>
            <ToggleButton value="import Excl">import Excl 
          
                            
                          
            
            </ToggleButton>
           
                          
                            
                           
          </ToggleButtonGroup>
        </Box>
       
    </div>
  )
}

export default ButtonCom