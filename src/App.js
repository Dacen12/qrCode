import React, {useState, useEffect} from 'react'
import Vcard from './Components/Vcard';
import Message from './Components/Message';
import Mail from './Components/Mail';
import Sms from './Components/Sms';
import staticqr from './assets/Image/default.png'
import download from './assets/download.png'
import axios from 'axios'
import {saveAs} from 'file-saver'
import './index.css'



function App() {
    const [clicked, setClicked] = useState('')
    const [qr, setQr] = useState({})
    


const downloadImage= () => {
  if(qr){
    saveAs(qr.url, qr.id)
  }
  
}




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
      <div className="model">
      <div className="display">
     
        <div className="qr-box">
        <img  draggable={false} src={qr.url ? qr.url : staticqr} />
        </div> 

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
      </div>


      <div className="form-wrapper">
      {switchComponents()}
      </div>
      <button className="download-button card-font" onClick={() => downloadImage()}  >Download</button>
      </div>
      </div>      
   
    </div>
  );
}

export default App;
