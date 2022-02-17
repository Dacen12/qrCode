import React from 'react'
import useForm from '../Hooks/useForm'

function Vcard({setQRCode, loader, scroller}) {
    const {setLoading} = loader
    const {setQr} = setQRCode
    const {scrollToQrCode} = scroller
    const [getInput, input, formSubmit] = useForm('vcard', setQr, setLoading, scrollToQrCode)
    
    
  return (
    <div className="vcard-component">
        <form onSubmit={e => formSubmit(e)}>
        <div className="column-wrapper mb-full-column">
            <input  required value={input.f_name} onChange={(e) => getInput(e)} name='f_name' placeholder='Voornaam' className="input-form" type="text" />
            <input  required value={input.s_name} onChange={(e) => getInput(e)} name='s_name' placeholder='Achternaam' className="input-form" type="text" />
        </div>
        
        <div className="column-wrapper mb-full-column">
            <input  required value={input.email} name="email" onChange={(e) => getInput(e)} placeholder='email@adres.com' className="input-form" type="text" />
            <input  required value={input.number} name="number" onChange={(e) => getInput(e)} placeholder='Mobiele nummer' className="input-form" type="text" />
        </div>

        <div className="full-column">
            <input  required value={input.company} name="company" onChange={(e) => getInput(e)} placeholder='Bedrijfsnaam' type="text" className="input-form" /> 
        </div>

        <div className="full-column">
            <input  required value={input.street} name="street" onChange={(e) => getInput(e)} type="text" placeholder='Straat' className="input-form" />
        </div>

        <div className="column-wrapper mb-full-column">
            <input  required value={input.residence} name="residence" onChange={(e) => getInput(e)} placeholder='Woonplaats' type="text" className="input-form" />
            <input  required value={input.zip} name="zip" onChange={(e) => getInput(e)} placeholder='Postcode' type="text" className="input-form" />
        </div>

        <div className="full-column">
            <input  required value={input.region} name="region" onChange={(e) => getInput(e)} placeholder='Regio' type="text" className="input-form" />
        </div>

        <div className="full-column">
            <input  value={input.website} name="website" onChange={(e) => getInput(e)} type="text" placeholder='www.jouwwebsite.com' className="input-form" />
        </div>

        <div className="full-column">
            <input  type="submit" value="Genereer Vcard" className="button-column width-button" />
        </div>
        </form>
    </div>
  )
}

export default Vcard