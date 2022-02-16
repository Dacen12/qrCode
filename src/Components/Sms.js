import React from 'react'
import useForm from '../Hooks/useForm'

function Sms({setQRCode, loader, scroller}) {
  const {setLoading} = loader
  const {setQr} = setQRCode
  const {scrollToQrCode} = scroller
  const [getInput, input, formSubmit] = useForm('sms', setQr, setLoading, scrollToQrCode)

  return (
    <div className="sms-component mb-sms-full-column">
<form onSubmit={e => formSubmit(e)}>
<div className="full-column">
    <input required value={input.number} name="number" onChange={(e) => getInput(e)} type="text" className="input-form" placeholder="Mobiele nummer" />
    <textarea required value={input.body} name="body" onChange={(e) => getInput(e)} type="text" className="input-form" placeholder="Bericht" />
</div>

<div className="full-column">
    <input type="submit" className="button-column width-button generate-button" value='Sms genereren' />
</div>
</form>
    </div>
  )
}

export default Sms