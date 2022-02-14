import React from 'react'
import cardinfo from './cardinfo'
function Info({infotext}) {
 const {clicked} = infotext
 
 const switchInfo = () => {
   switch(clicked){
     case 'vcard':
       return <p className="info-text">{cardinfo.vcard.text}</p>;
     case 'message':
       return <p className="info-text">{cardinfo.message.text}</p>;
       case 'email':
       return <p className="info-text">{cardinfo.email.text}</p>;
       case 'sms':
         return <p className="info-text">{cardinfo.sms.text}</p>
     default :
     return <p className="info-text">{cardinfo.message.text}</p>
   }

 }

  return (
    <>
   {switchInfo()}
   </>
  )
}

export default Info