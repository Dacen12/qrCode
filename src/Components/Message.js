import React from 'react'
import useForm from '../Hooks/useForm'
function Message({setQRCode}) {

  const {setQr} = setQRCode 
  const [getInput, input, formSubmit] = useForm('message', setQr)
  return (

    <div className="message-component">
      <form onSubmit={e => formSubmit(e)}>
       <div className="full-column">
           <input input={input.message} onChange={(e) => getInput(e)} name="message" type="text" className="input-form" placeholder='Link of bericht invoeren...'/>
       </div>
       
       <div className="full-column">
            <input type="submit" className="button-column" value='Bericht generen' />
        </div>
        </form>
    </div>
  )
}

export default Message