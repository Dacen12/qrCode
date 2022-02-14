import {useState, useEffect} from 'react'
import axios from 'axios'
export default function useForm(type, setQr) {
const [input, setInput] = useState({})
const getInput = (e) => {
    const {name, value} = e.target
    setInput({
        ...input,
        [name]: value
    })
}

const formSubmit = (e) => {
e.preventDefault()


    const data = {
    type,
    input
}

 axios.post('http://localhost:4999/getQR', data).then((res) => {
     setQr(res.data)
 })


}

return [getInput, input, formSubmit]

}