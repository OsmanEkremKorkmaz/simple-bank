import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    user: {
        username: "user",
        password: "pass",
        isLogin: localStorage.getItem("isLogin") || false,
        balance: localStorage.getItem("balance") || 1000
    }
  },
  reducers: {
    login: (state, action) => {
        if(action.payload.password == state.user.password && action.payload.username == state.user.username){
            state.user.isLogin = true
            localStorage.setItem("isLogin", true)
            return true
        }
        return false;
    },
    deposit: (state, action) => {
        localStorage.setItem("balance", (+state.user.balance + +action.payload))
        state.user.balance = +state.user.balance + +action.payload
    },
    withdraw: (state, action) => {
        if(+state.user.balance >= action.payload){
            localStorage.setItem("balance", (+state.user.balance - +action.payload))
            state.user.balance = +state.user.balance - +action.payload
        }
    }
},
})

// Action creators are generated for each case reducer function
export const { login, deposit, withdraw } = counterSlice.actions

export default counterSlice.reducer