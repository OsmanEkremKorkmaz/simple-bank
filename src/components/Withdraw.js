import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { withdraw } from '../redux/slices/userSlice'

export default function Withdraw() {
    const [price, setPrice] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        if(price){
            dispatch(withdraw(price))
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
