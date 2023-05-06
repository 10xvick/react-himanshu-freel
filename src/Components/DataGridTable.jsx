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

export default function DataGridTable() {

 
  return (
    <div>
      <Typography variant='h4' p={2} color="#3f51b5">Calculation of Interest</Typography>
         <TableContainer sx={{width:"1250px"}}>
      
      <Table  aria-label="simple table"  >
        <TableHead sx={{border:1}}>
          <TableRow sx={{border:1 }}>
          
            <TableCell  align="center" sx={{border:"1px solid black" }}>Date</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black"}}>Payment</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black"}}>Recipt</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black"}}>Period</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black"}}>Interest</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black"}}>Cummulative</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black"}}>Balence</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black"}}>Tr</TableCell>
         
         
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
              <TableCell  sx={style3} align="center"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>
    </div>
 
  );
}
