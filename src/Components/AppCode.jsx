import React, { useState } from 'react';
import Dropdown from './Dropdown';
import ComponentForOption from './ComponentForOption';
import { Grid, TextField ,Box, Button} from '@mui/material';
import SideBarCaption from './SideBarCaption';
import AccountData from "./QuickData"
import Ledger from './Ledger';
import InputData from './AccountData';
import PartyMaster from './PartMaster';
import InterestMaster from './InterestMaster';
import InterestData from './InterestData';
import ButtonCom from './ButtonCom';
import ShowMessage from './ShowMessage';



const options = {
    dropdown1: ["Selected Data", "Selected Parties" , "Quick interest"],
    dropdown2: ["Tras. Date", "Value Date"],
    dropdown3: ["Day", "Month", "Year"],
    dropdown6: ["Day", "Month", "Year"],
    dropdown8: ["All" , "Credit only" , "Debit Only"],
    dropdown9: ["Day", "Month", "Year"],
    dropdown10: ["Decimal Rounding" , "Nearest Multiple"],
    dropdown11: ["Year", "Month", "Day"],
};
function AppCode({message , message1 ,message2 ,message3 ,message4,message5  }) {
    const [Opt, setOpt] = useState('')
    const [selectedOpt, setSelectedOpt] = useState('')
    const [selectedOptions, setSelectedOptions] = useState({
        dropdown1: null,
        dropdown2: null,
        dropdown3: null,
        dropdown6: null,
        dropdown8: null,
        dropdown9: null,
        dropdown10: null,
        dropdown11: null,
    });

  
    const handleOptionChange = (dropdown, value) => {
        setSelectedOptions((prevSelectedOptions) => ({
            ...prevSelectedOptions,
            [dropdown]: value === "" ? null : value,
        }));
    };

    const getSelectedOption = (dropdown) => {
        console.log(dropdown, "dropdown")
        return selectedOptions[dropdown] || null;
    };

    const handleDropdown1Change = (value) => {
        setSelectedOpt('dropdown1')
        handleOptionChange("dropdown1", value);
    };

    const handleDropdown2Change = (value) => {
        setSelectedOpt('dropdown2')
        handleOptionChange("dropdown2", value);

    };

    const handleDropdown3Change = (value) => {
        setSelectedOpt('dropdown3')
        handleOptionChange("dropdown3", value);
    };




    const handleDropdown6Change = (value) => {
        setSelectedOpt('dropdown6')
        handleOptionChange("dropdown6", value);
    };


    const handleDropdown8Change = (value) => {
        setSelectedOpt('dropdown8')
        handleOptionChange("dropdown8", value);
    };

    const handleDropdown9Change = (value) => {
        setSelectedOpt('dropdown9')
        handleOptionChange("dropdown9", value);
    };
    const handleDropdown10Change = (value) => {
        setSelectedOpt('dropdown10')
        handleOptionChange("dropdown10", value);
    };
    const handleDropdown11Change = (value) => {
        setSelectedOpt('dropdown11')
        handleOptionChange("dropdown11", value);
    };

    return (
        <div >
           <Box sx={{width:"21.4rem" }}>
            <Grid item lg={3} sm={3} xs={3} md={3} xl={3}>
                <Button fullWidth variant='contained' sx={{fontSize:"1.25rem",fontWeight:"bold" , textTransform:"capitalize"}}>Interest Parameters</Button>
            </Grid>
           </Box>
            <Grid container >
              
                <Grid item lg={1.5}  sm={1.5} xs={1.5} md={1.5} xl={1.5}>
              
                    <SideBarCaption />
                </Grid>
                <Grid item lg={1.5} sm={1.5} xs={1.5} md={1.5} xl={1.5} sx={{ border: "1px solid black", borderRight: "1px solid black" }}>
               
                    <Dropdown
                        options={options.dropdown1}
                        onOptionChange={(value) => handleDropdown1Change(value)}
                    />
                 
                  


                    <Dropdown
                        options={options.dropdown2}
                        selectedOption={getSelectedOption("dropdown2")}
                        onOptionChange={(value) => handleDropdown2Change(value)}
                    />

                       <TextField variant="standard" type="date" id="birthdaytime" name="birthdaytime" fullWidth sx={{mt:"0.9rem"}} />
                    <TextField variant="standard" fullWidth sx={{mt:"0.8rem"}} />
                    <TextField variant="standard" fullWidth sx={{mt:"0.8rem"}} />
                    <Dropdown
                        options={options.dropdown3}
                        selectedOption={getSelectedOption("dropdown3")}
                        onOptionChange={(value) => handleDropdown3Change(value)}
                    />
                 
                    <Dropdown
                        options={options.dropdown6}
                        selectedOption={getSelectedOption("dropdown6")}
                        onOptionChange={(value) => handleDropdown6Change(value)}
                    />

                  

                    <Dropdown
                        options={options.dropdown8}
                        selectedOption={getSelectedOption("dropdown8")}
                        onOptionChange={(value) => handleDropdown8Change(value)}
                    />
 
                    <Dropdown
                        options={options.dropdown9}
                        selectedOption={getSelectedOption("dropdown9")}
                        onOptionChange={(value) => handleDropdown9Change(value)}
                    />
                    <Box sx={{display:"flex"}}>
                    <TextField type='number' variant="standard" fullWidth sx={{mt:"0.8rem" }} />
          
                    <Dropdown
                        options={options.dropdown9}
                        selectedOption={getSelectedOption("dropdown9")}
                        onOptionChange={(value) => handleDropdown9Change(value)}
                    />
                    </Box>
               
                    <Dropdown
                        options={options.dropdown10}
                        selectedOption={getSelectedOption("dropdown10")}
                        onOptionChange={(value) => handleDropdown10Change(value)}
                    />


                   
                    <Dropdown
                        options={options.dropdown11}
                        selectedOption={getSelectedOption("dropdown11")}
                        onOptionChange={(value) => handleDropdown11Change(value)}
                    />


                
                </Grid>

                <Grid item  sm={9} xs={9} md={9} lg={9} xl={9}>
                <ButtonCom/>
                <Box sx={{ml:"1rem"}}>
         <ComponentForOption option={getSelectedOption(selectedOpt)} />

         {/* <ShowMessage message={message} message1={message1} message2={message2} message3={message3} message4={message4}  
          message5={message5}/> */}

          
          
               
           
                 
                    
              
          
               
                  {message === "Ledger" ? <Ledger/> : " "}
                  {message3 === "AccountData" ? <AccountData/> : " "}
                  {message1 === "InputData" ? <InputData/> : " "}
                  {message4 === "PartyMaster" ? <PartyMaster/> : " "}
                  {message2 === "InterestMaster" ? <InterestMaster/> : " "}
                  {message5 === "InterestData" ? <InterestData/> : " "}
                  </Box>
                </Grid>
            </Grid>

            <Grid container>
            <Grid item lg={3}  sm={3} xs={3} md={3} xl={3}>
                <Button fullWidth variant='contained' square sx={{fontSize:"1.25rem",fontWeight:"bold" , textTransform:"capitalize"}}>Proceed</Button>
            </Grid>
           </Grid>
        </div>
    );
}

export default AppCode;
