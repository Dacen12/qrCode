import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    console.log(qr)
  }, [qr.url])

  const checkImageSource = () => { 
    // if(!qr && loading == false) {
    //   return <img className={`${effector.smallImage ? ('scaledown') : ('scaleup') }`} draggable={false} src={staticqr} />
    // } else if(qr && loading == true) {
    //   <img  draggable={false} src={buffer} />
    // } else if(!qr && loading == true){
    //   <img  draggable={false} src={buffer} />
    // } else {
    //   return <img className={`${effector.smallImage ? ('scaledown') : ('scaleup') }`} draggable={false} src={staticqr} />
    // }

    if(loading === true && !qr.url){
      console.log('loading === true and !qr')
      return <img className={`${effector.smallImage ? ('scaledown') : ('scaleup') }`} draggable={false} src={buffer} />
    } else if (loading === true && qr.url){
      console.log('loading === true and qr')
     return  <img className={`${effector.smallImage ? ('scaledown') : ('scaleup') }`} draggable={false} src={buffer} />
    } else if(loading === false && qr.url){
      console.log('loading === false and qr')
     return <img className={`${effector.smallImage ? ('scaledown') : ('scaleup') }`} draggable={false} src={qr.url} />
    } else { 
      // (loading === false && !qr.url)
      console.log('loading === false and !qr')
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
        return <Vcard  loader={{setLoading}} setQRCode={{ setQr }} />

      case 'message':
        return <Message loader={{setLoading}} setQRCode={{ setQr }} />

      case 'email':
        return <Mail loader={{setLoading}} setQRCode={{ setQr }} />

      case 'sms':
        return <Sms loader={{setLoading}} setQRCode={{ setQr }} />

      default:
        return <Message loader={{setLoading}} setQRCode={{ setQr }} />

    }

  }


  return (
    <div className="wrapper">
      <div className="qr-wrapper">
        <div className="model">
    
          <Options setClickAction={{setClicked}} />
          <fieldset className="card-info">
            <legend>{clicked}</legend>
              <Info infotext={{clicked}} />
            
            </fieldset>
          <div className="form-wrapper">
            {switchComponents()}
          </div>

        </div>
      
      <div className="display-wrapper">
        
        <div className="display">
          
          <div className="qr-box">
            {/* <img className={`${effector.smallImage ? ('scaledown') : ('scaleup') }`} draggable={false} src={qr.url ? qr.url : staticqr} /> */}
           {checkImageSource()}
          </div>
          <div className="user-options">
            <button className="download-button download-align button-column" onClick={() => downloadImage()}> Download </button>  
            <button onClick={() => setEffector( prevValue => ({
              smallImage: !prevValue.smallImage 
            }))} className="button-column width-button">Afbeelding {effector.smallImage ? 'vergroten' : 'verkleinen'}</button>
          </div>
        
        </div>
          
       </div>
        
      </div>

    </div>
  );
}

export default App;
