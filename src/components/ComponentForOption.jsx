import React from "react";
import Mannual from "./Mannual";
import {  Box } from "@mui/material";
import DataGridTable from "./DataGridTable";

import InputData from "./AccountData";
import AccountData from "./QuickData"
const ComponentForOption = ({ option }) => {
    console.log('!!!!!!!!!!!!!!!!', option)
  switch (option) {
    case "Selected Data":
      return <Box><Mannual/></Box>;
    case "Selected Parties":
      return <div>Component for Excel</div>;
    case "option4":
      return <div><DataGridTable/></div>;
  
    case "option5":
      return <div></div>;
    case "option6":
      return <div><InputData/></div>;
    case "Creditor":
      return <div><AccountData/></div>;
    case "Debitor":
      return <div>Component Debitor</div>;
 
  
    case "option1":
     return <div>Component for option 4</div>;
    case "option2":
     return <div>Component for option 5</div>;       
   
        case "Day":
            return <div> Day/Month/year</div>; 
           
        default:
      return null;
  }
};

export default ComponentForOption;
