import Header from './components/Header';
import Menu from './components/Menu'; 
import Withdraw from './components/Withdraw'; 
import Login from './components/Login'; 
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useSelector} from "react-redux";
import {useEffect} from "react"
import Deposit from './components/Deposit';


function App() {

  const navigate = useNavigate()

  const user = useSelector(state => state.user.user)

  useEffect(() => {

    if (!user.isLogin){
      navigate("/login", {replace:true})
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Menu /> } />
          <Route path="/login" element={<Login />}/>
          <Route path="/balance" element={<>
          <h1 className="balance">Bakiye: {user.balance}</h1>
          </>}/>
          <Route path="/deposit" element={<Deposit />}/>
          <Route path="/withdraw" element={<Withdraw />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
