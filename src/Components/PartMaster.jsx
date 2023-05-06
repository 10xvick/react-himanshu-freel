import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { style1 , style2, style3, style4, style5 } from '../CommonStyle';
import {Typography} from "@mui/material"



const rows = [
{} ,{}, {},{} ,{}, {},{} ,{}, {} ,{},{} ,{}, {},{} ,{}, {}
  
];

export default function PartyMaster() {


  return (
    <div>
      <Typography variant='h4' color="#3f51b5">List of parties</Typography>
         <TableContainer sx={{width:"62rem"}}>
      
      <Table  aria-label="simple table"  >
        <TableHead sx={{border:1}}>
          <TableRow sx={{border:1 }}>
          
            <TableCell  align="center" sx={{border:"1px solid black" ,width:"2.5rem"}}>Code</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black" , width:"24rem"}} > Party</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black" ,width:"12rem" }}>Group</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black" , width:"8rem"}}>Op. Bal</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black" , width:"8rem"}}>Credit</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black" , width:"8rem"}}>Debit</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black" , width:"8rem"}}> Cl. Bal</TableCell>
       
          
         
         
          </TableRow>
        </TableHead>
        <TableBody sx={{border:1}}>
          {rows.map((row) => (
            <TableRow sx={{border:1}}>
              <TableCell component="th" scope="row"  sx={style3} align="center"> 123</TableCell>
              <TableCell  sx={style3} align="center"></TableCell>
              <TableCell  sx={style3} align="center"></TableCell>
              <TableCell  sx={style3} align="center"></TableCell>
              <TableCell  sx={style3} align="center"></TableCell>
               <TableCell  sx={style3} align="center"></TableCell>
              <TableCell  sx={style3} align="center"></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>
    </div>
 
  );
}
