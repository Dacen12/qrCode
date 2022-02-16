import React from 'react'
import useForm from '../Hooks/useForm'
function Mail({setQRCode, loader, scroller}) {
  const {setLoading} = loader
  const {setQr} = setQRCode
  const {scrollToQrCode} = scroller
  const [getInput, input, formSubmit] = useForm('mail', setQr, setLoading, scrollToQrCode)
  return (
    <div className="email-component">
        <form onSubmit={e => formSubmit(e)}>
        <div className="full-column mb-email-full-column">
            <input required value={input.email} onChange={(e) => getInput(e)} name="email" type="text" className="input-form" placeholder='email@adres.com' />
            <input required value={input.subject} onChange={(e) => getInput(e)} name="subject" type="text" className="input-form" placeholder='Onderwerp' />
        </div>
    <div className="full-column">
        <input type="submit" className="button-column width-button generate-button " value='Email genereren' />
    </div>
    </form>
    
    </div>
  )
}

export default Mail