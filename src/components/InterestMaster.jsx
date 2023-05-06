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

export default function InterestMaster() {


  return (
    <div>
      <Typography variant='h4' p={2} color="#3f51b5">
      Interest Master
          </Typography>
         <TableContainer sx={{width:"62rem"}}>
      
      <Table  aria-label="simple table"  >
        <TableHead sx={{border:1}}>
          <TableRow sx={{border:1 }}>
          
            <TableCell  align="center" sx={{border:"1px solid black" , width:"3rem" }}>Deal No.</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black" ,width:"20rem"}}>Party</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black" ,width:"4rem"}}>From Date</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black" ,width:"4rem"}}>To Date</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black" ,width:"2rem"}}>ROI</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black" ,width:"2rem"}}>Per</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black" ,width:"2rem"}}>Basis</TableCell>
            <TableCell  align="center"  sx={{border:"1px solid black" ,width:"2rem"}}>compounding</TableCell>
         
         
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
