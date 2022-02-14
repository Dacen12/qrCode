import {useState, useEffect} from 'react'
import axios from 'axios'
export default function useForm(type, setQr, setLoading) {
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
const data = {type, input}

const getImage = new Promise((resolve, reject) => {
    setLoading(true)
    axios.post('http://localhost:4999/getQR', data).then((res) => {
        setQr(prevValue => {
            return delete prevValue.url
            
        })
    resolve(res.data)

}).catch((err) => reject(err))
})

getImage.then((res) => {
    setLoading(false)
    setQr(prevValue => {
       
        return res
    })
})

}

return [getInput, input, formSubmit]

}


