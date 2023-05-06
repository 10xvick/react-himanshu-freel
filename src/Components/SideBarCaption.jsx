import React from 'react'
import { Box, Typography , Button} from '@mui/material'
function SideBarCaption() {
  return (
    <Box sx={{  border:"1px solid black" , backgroundColor:"#1976d2" , color:"white"  }} >

      <Typography sx={{ fontSize:"1rem" , fontWeight:"bold",borderBottom: "1px solid black", textAlign: "left", height: "2.75rem", display: "flex", alignItems: "center" }} pl={0}>Interest on</Typography>
<Typography  sx={{ fontSize:"1rem" , fontWeight:"bold",borderBottom:"1px solid black" ,  textAlign:"left" , height:"2.75rem" , display:"flex" , alignItems:"center"}}  pl={0}>Date criteria</Typography>
<Typography sx={{ fontSize:"1rem" , fontWeight:"bold",borderBottom:"1px solid black" , textAlign:"left" , height:"2.75rem" , display:"flex" , alignItems:"center"}}   pl={0}>Starting Date</Typography>
<Typography  sx={{ fontSize:"1rem" , fontWeight:"bold",borderBottom:"1px solid black" ,  textAlign:"left", height:"2.75rem" , display:"flex" , alignItems:"center"}}   pl={0}>Settlement Date</Typography>
<Typography  sx={{ fontSize:"1rem" , fontWeight:"bold",borderBottom:"1px solid black", textAlign:"left" , height:"2.75rem" , display:"flex" , alignItems:"center"}}  pl={0}>Rate of Interest</Typography>
<Typography sx={{ fontSize:"1rem" , fontWeight:"bold",borderBottom:"1px solid black" , textAlign:"left" , height:"2.75rem" , display:"flex" , alignItems:"center"}}   pl={0}>Per Period</Typography>
<Typography sx={{ fontSize:"1rem" , fontWeight:"bold",borderBottom:"1px solid black" ,textAlign:"left" , height:"2.75rem" , display:"flex" , alignItems:"center"}}  pl={0}>Period Basis</Typography>
<Typography  sx={{ fontSize:"1rem" , fontWeight:"bold",borderBottom:"1px solid black" , textAlign:"left" , height:"2.75rem" , display:"flex" , alignItems:"center"}}  pl={0}>Int. on Balances</Typography>
<Typography  sx={{ fontSize:"1rem" , fontWeight:"bold",borderBottom:"1px solid black" , textAlign:"left" , height:"2.75rem" , display:"flex" , alignItems:"center"}}   pl={0}>Compounding Period</Typography>
<Typography sx={{ fontSize:"1rem" , fontWeight:"bold",borderBottom:"1px solid black" , textAlign:"left" , height:"2.75rem" , display:"flex" , alignItems:"center"}}   pl={0}>Compounding From</Typography>
<Typography  sx={{ fontSize:"1rem" , fontWeight:"bold",borderBottom:"1px solid black" , textAlign:"left" , height:"2.75rem" , display:"flex" , alignItems:"center"}}  pl={0}>Rounding Method</Typography>
<Typography sx={{ fontSize:"1rem" , fontWeight:"bold",borderBottom:"" , textAlign:"left" , height:"2.75rem" , display:"flex" , alignItems:"center"}}  pl={0}>Int. Payment Period</Typography>

  
    </Box>
  )
}

export default SideBarCaption