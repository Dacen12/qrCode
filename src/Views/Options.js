import React, {useEffect} from 'react'
import Info from '../assets/info/Info'
import cardinfo from '../assets/info/cardinfo'
function Options({setClickAction}) {
    const {clicked, setClicked} = setClickAction
    

    
    return (
    <div className="option-boxes">

     <span onClick={() => setClicked('vcard')} className={`${clicked == 'vcard' ? `set-selected-option` : ""} hover vcard options-st`}>
     
       <span className=" card-effect card-font">
         Vcard
       </span>
     </span>


   <span onClick={() => setClicked('message')}  className={` ${clicked == 'message' ? `set-selected-option` : ""} hover message options-st`}>
     
     <span className=" card-effect card-font">Bericht / Link</span>
   </span>

 <span onClick={() => setClicked('email')}  className={` ${clicked == 'email' ? `set-selected-option` : ""} hover email options-st`}>
   
   <span className=" card-font card-effect">Email</span>
 </span>
    
 <span onClick={() => setClicked('sms')}  className={` ${clicked == 'sms' ? `set-selected-option` : ""} hover sms options-st`}>
     
     <span className=" card-effect card-font">SMS</span>
   </span>

     </div>
  )
}

export default Options