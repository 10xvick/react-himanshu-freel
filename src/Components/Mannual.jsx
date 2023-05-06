import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { style1, style2, style3, style4, style5 } from '../CommonStyle';
import { TextField } from "@mui/material";
import { DateField } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
export default function Mannual() {

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const regex = /^\d*\.?\d{0,2}$/; // regular expression to match two-digit decimal values
    const newValue = event.target.value;

    if (regex.test(newValue)) { // check if the new value matches the regular expression
      setValue(newValue);
    }
  };

 
  const rows = [
    {}, {}, {}, {}, {}, {}, {}, {}

  ];
  return (
    <div>
      <TableContainer sx={{ width: "1250px", mt: "80px", mb: "40px" }}>
        <Table aria-label="simple table"  >
          <TableHead sx={{ border: 1 }}>
            <TableRow sx={{ border: 1 }}>
              <TableCell align="center" sx={{ border: "1px solid black", width: "80px" }} > Transaction date</TableCell>
              <TableCell align="center" sx={{ border: "1px solid black", width: "150px" }}>Debit</TableCell>
              <TableCell align="center" sx={{ border: "1px solid black", width: "150px" }}>Credit</TableCell>
              <TableCell align="center" sx={{ border: "1px solid black", width: "300px" }}>Account</TableCell>
              <TableCell align="center" sx={{ border: "1px solid black", width: "120px" }}>Mode</TableCell>
              <TableCell align="center" sx={{ border: "1px solid black", width: "120px" }}> value date</TableCell>
              <TableCell align="center" sx={{ border: "1px solid black", width: "190px" }}>remarks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ border: 1 }}>
            {rows.map((row) => (
              <TableRow key={row.id} sx={{ border: 1 }}>
                <TableCell component="th" scope="row" sx={style3} align="center">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField size="small" variant='standard' format="DD-MM-YY" sx={{ textAlign: "center" }} />
                  </LocalizationProvider>

                </TableCell>
                <TableCell sx={style3} align="center">
                  <TextField size="small" variant="standard" type="number"
                    value={value} onChange={handleChange}
                    />
                </TableCell>
                <TableCell sx={style3} align="center">
                  <TextField size="small" variant="standard" type="number"
                   value={value} onChange={handleChange}
                     />
                </TableCell>
                <TableCell sx={style3} align="center">
                  <TextField size="small" variant="standard" />
                </TableCell>
                <TableCell sx={style3} align="center">
                  <TextField size="small" variant="standard" />
                </TableCell>
                <TableCell sx={style3} align="center">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField size="small" variant='standard' format="DD-MM-YY" sx={{ textAlign: "center" }} />
                  </LocalizationProvider>
                </TableCell>
                <TableCell sx={style3} align="center">
                  <TextField size="small" variant="standard" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </TableContainer>
    </div>

  );
}