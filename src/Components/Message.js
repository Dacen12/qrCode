import React from 'react'
import useForm from '../Hooks/useForm'
function Message({setQRCode, loader}) {
  const {setLoading} = loader
  const {setQr} = setQRCode 
  const [getInput, input, formSubmit] = useForm('message', setQr, setLoading)
  return (

    <div className="message-component">
      <form onSubmit={e => formSubmit(e)}>
       <div className="full-column">
           <input required input={input.message} onChange={(e) => getInput(e)} name="message" type="text" className="input-form" placeholder='Link of bericht invoeren...'/>
       </div>
       
       <div className="full-column">
            <input type="submit" className="button-column width-button" value='Bericht generen' />
        </div>
        </form>
    </div>
  )
}

export default Message