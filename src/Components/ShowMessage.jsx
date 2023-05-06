import React from 'react'
import Ledger from './Ledger'
import InputData from './AccountData'
import PartyMaster from './PartMaster'
import InterestMaster from './InterestMaster'
import InterestData from './InterestData'
import AccountData from './QuickData'
function ShowMessage({message , message1 ,message2 ,message3 ,message4,message5 }) {
  return (
    <div>
        {message === "Ledger" ? <Ledger/> : " "}
                  {message3 === "AccountData" ? <AccountData/> : " "}
                  {message1 === "InputData" ? <InputData/> : " "}
                  {message4 === "PartyMaster" ? <PartyMaster/> : " "}
                  {message2 === "InterestMaster" ? <InterestMaster/> : " "}
                  {message5 === "InterestData" ? <InterestData/> : " "}
    </div>
  )
}

export default ShowMessage