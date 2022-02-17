import React, { useState, useEffect, useRef } from 'react'
import Vcard from './Components/Vcard';
import Message from './Components/Message';
import Mail from './Components/Mail';
import Sms from './Components/Sms';
import staticqr from './assets/Image/default.png'
import Options from './Views/Options';
import { saveAs } from 'file-saver';
import buffer from './assets/buffer.gif'
import Info from './assets/info/Info';



function App() {
  const [clicked, setClicked] = useState('message')
  const [qr, setQr] = useState({})
  const [loading, setLoading] = useState(false)
  const [effector, setEffector] = useState({
    smallImage: true
  })
  const scroller = useRef()
  const scrollToQrCode = () => scroller.current.scrollIntoView()

  

  const checkImageSource = () => { 

    if(loading === true && !qr.url){
     
      return <img className={`${effector.smallImage ? ('scaledown') : ('scaleup') }`} draggable={false} src={buffer} />
    } else if (loading === true && qr.url){
     
     return  <img className={`${effector.smallImage ? ('scaledown') : ('scaleup') }`} draggable={false} src={buffer} />
    } else if(loading === false && qr.url){
     return <img className={`${effector.smallImage ? ('scaledown') : ('scaleup') }`} draggable={false} src={qr.url} />
    } else { 
      // (loading === false && !qr.url)
      
      return <img className={`${effector.smallImage ? ('scaledown') : ('scaleup') }`} draggable={false} src={staticqr} />
    }

  }


  const downloadImage = () => {
    if (qr) {
      saveAs(qr.url, `QR_${qr.id}`)
    }

  }



  const switchComponents = () => {
    switch (clicked) {
      case 'vcard':
        return <Vcard scroller={{scrollToQrCode}}  loader={{setLoading}} setQRCode={{ setQr }} />

      case 'message':
        return <Message scroller={{scrollToQrCode}}  loader={{setLoading}} setQRCode={{ setQr }} />

      case 'email':
        return <Mail scroller={{scrollToQrCode}}  loader={{setLoading}} setQRCode={{ setQr }} />

      case 'sms':
        return <Sms scroller={{scrollToQrCode}}  loader={{setLoading}} setQRCode={{ setQr }} />

      default:
        return <Message  scroller={{scrollToQrCode}} loader={{setLoading}} setQRCode={{ setQr }} />

    }

  }


  return (
    <div className="wrapper">
      <div className="qr-wrapper">
        
        
        <div className="model">
    
          <Options setClickAction={{clicked ,setClicked}} />
          <fieldset className="card-info">
            <legend>{clicked}</legend>
              <Info infotext={{clicked}} />
            </fieldset>

          <div className="form-wrapper">
            {switchComponents()}
          </div>
        </div>
      
        <div className="display-wrapper">
        
        <div ref={scroller} className="display">
          
          <div className="qr-box">
           
           {checkImageSource()}
          </div>
          <div className="user-options">
            <button className="download-button download-align button-column" onClick={() => downloadImage()}> Download </button>  
            <button onClick={() => setEffector( prevValue => ({
              smallImage: !prevValue.smallImage 
            }))}>Afbeelding {effector.smallImage ? 'vergroten' : 'verkleinen'}</button>
            {/* afbeelding className= "button-column width-button" <- change this */}
          </div>
        
        </div>
          
       </div>
        
      </div>


{/* Mobile only! */}
{qr.url && (<span onClick={downloadImage} className="sticky-download"> <span></span></span>)}
    </div>
  );
}

export default App;
