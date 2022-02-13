import React from 'react'
import useForm from '../Hooks/useForm'
function Mail({setQRCode}) {
  
  const {setQr} = setQRCode
  const [getInput, input, formSubmit] = useForm('mail', setQr)
  return (
    <div className="email-component">
        <form onSubmit={e => formSubmit(e)}>
        <div className="full-column">
            <input value={input.email} onChange={(e) => getInput(e)} name="email" type="text" className="input-form" placeholder='email@adres.com' />
            <input value={input.subject} onChange={(e) => getInput(e)} name="subject" type="text" className="input-form" placeholder='Onderwerp' />
        </div>
    <div className="full-column">
        <input type="submit" className="button-column" value='Email genereren' />
    </div>
    </form>
    
    </div>
  )
}

export default Mail