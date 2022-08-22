import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deposit } from '../redux/slices/userSlice'

export default function Deposit() {
    const [price, setPrice] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        if(price){
            dispatch(deposit(price))
            navigate("/balance",{replace:true})
        }
        setPrice("")
    }
  return (
    <div className='deposit'>
        <form onSubmit={handleSubmit}>
            <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder='para miktarı' />
            <button type='submit'>İşlemi Yap</button>
        </form>

    </div>
  )
}
