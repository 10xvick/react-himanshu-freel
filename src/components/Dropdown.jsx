import React from "react";
import { Box, Select, MenuItem } from '@mui/material';
const Dropdown = ({ options, selectedOption, onOptionChange }) => {
  return (
    <div>
      <Box >
        <Select variant='standard' 
          value={selectedOption === null ? "" : selectedOption}
          onChange={(e) => onOptionChange(e.target.value)}
          displayEmpty fullWidth
        sx={{height:"2.8rem"}}
        >
          {options.map((option) => {
            return (
              <MenuItem value={option} key={option} sx={{}} >
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
</div>
  );
};

export default Dropdown;
