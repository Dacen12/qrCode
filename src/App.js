import React, {useState, useEffect} from 'react'
import Vcard from './Components/Vcard';
import Message from './Components/Message';
import Mail from './Components/Mail';
import Sms from './Components/Sms';
import staticqr from './assets/Image/default.png'
import staticVcard from './assets/id-card.png'
import message from './assets/iconsms.png'
import at from './assets/at.png'
import sms from './assets/sms.png'
import './index.css'



function App() {
    const [clicked, setClicked] = useState('')
    const [qr, setQr] = useState()
    

    const switchComponents = () => {
      switch(clicked){
        case 'vcard':
          return <Vcard setQRCode={{setQr}}/>
          
        case 'message':
          return <Message setQRCode={{setQr}} />
        
          case 'email':
            return <Mail setQRCode={{setQr}} />
      
          case 'sms':
            return <Sms setQRCode={{setQr}} />
          
          default: 
          return <Message setQRCode={{setQr}} />
          
          }

    }


  return (
    <div className="wrapper">
      <div className="qr-wrapper">
      
      <div className="display">
        <div className="qr-box">
        <img src={qr ? qr : staticqr} />
        </div> 

        <div className="option-boxes">

        <span onClick={() => setClicked('vcard')} className="vcard options-st">
        <img className="img-st" src={staticVcard}/>
          <span className="span-st">Vcard</span>
        </span>


      <span onClick={() => setClicked('message')}  className="message options-st">
        <img src={message} className="img-st" />
        <span className="span-st">Bericht / Link</span>
      </span>

    <span onClick={() => setClicked('email')}  className="email options-st">
      <img className="img-st" src={at} />
      <span className="span-st">Email</span>
    </span>
       
    <span onClick={() => setClicked('sms')}  className="sms options-st">
        <img src={sms} className="img-st" />
        <span className="span-st">SMS</span>
      </span>
        </div>
      </div>


      <div className="form-wrapper">
      {switchComponents()}
      </div>
      
      </div>      
   
    </div>
  );
}

export default App;
