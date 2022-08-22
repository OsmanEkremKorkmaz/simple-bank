import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/slices/userSlice';
import { useSelector} from "react-redux";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const user = useSelector(state => state.user.user);

    const handleSubmit = e => {
        e.preventDefault()

        dispatch(login({username, password}))
        
        

        setUsername("")
        setPassword("")

    }

    useEffect(() => {
      if(user?.isLogin){
        navigate("/", {replace:true})
      }
    }, [user])
    
  return (
    <div className='login'>
        <form onSubmit={handleSubmit}>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder='user' />
            <input value={password} onChange={e => setPassword(e.target.value)} placeholder='pass' />
            <button type='submit'>Log in</button>
        </form>
    </div>
  )
}
