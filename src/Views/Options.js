import React, {useEffect} from 'react'
import Info from '../assets/info/Info'
import cardinfo from '../assets/info/cardinfo'
function Options({setClickAction}) {
    const {setClicked} = setClickAction
    

    
    return (
    <div className="option-boxes">

     <span onClick={() => setClicked('vcard')} className=" hover vcard options-st">
     
       <span className=" card-effect card-font">
         Vcard
       </span>
     </span>


   <span onClick={() => setClicked('message')}  className=" hover message options-st">
     
     <span className=" card-effect card-font">Bericht / Link</span>
   </span>

 <span onClick={() => setClicked('email')}  className=" hover email options-st">
   
   <span className=" card-font card-effect">Email</span>
 </span>
    
 <span onClick={() => setClicked('sms')}  className=" hover sms options-st">
     
     <span className=" card-effect card-font">SMS</span>
   </span>

     </div>
  )
}

export default Options