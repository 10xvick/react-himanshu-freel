import React from 'react'
import AppCode from './AppCode';
import { Button, Grid } from '@mui/material';

function GridApp({message , message1 ,message2 ,message3 ,message4,message5 }) {
  return (
    <div>
        <Grid Container>
            <Grid item lg={3} sm={3} md={3} xl={3}>
              
                <AppCode message={message} message1={message1} message2={message2} message3={message3} message4={message4}  
     message5={message5}/>
            </Grid>
        </Grid>
    </div>
  )
}

export default GridApp