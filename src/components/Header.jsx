import React from 'react';
import {AppBar ,Box ,Toolbar ,Typography} from '@mui/material';


function Header() {
  return (
    <div>
           <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx={{zIndex:1201, height:"5rem"}} elevation={0}   >
        <Toolbar variant="dense" sx={{justifyContent:"center"}}>
       
          <Typography variant="h3" sx={{}}>
          True Interest
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header