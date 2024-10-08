import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  
  const [phone, setPhone]= useState()
    const [amount, setAmount]= useState()

    const payHandler = (event)=>{
        event.preventDefault();
        axios.post("http://localhost:3000/token",{
          amount,
          phone,
        }).then((res)=> {
          console.log(res);
        }).catch((error)=>{
          console.log(error);
        });
    };

  return (
    <>
      <form className='render-content'>
            <label>Amount</label>
            <input type="number" id="amount" name="amount" placeholder='Emter Amount' onChange={(e)=> setAmount(e.target.value)}/> <br />
            <label>Phone Number</label>
            <input type='number' id="phone-number" name="phone-number" placeholder='Enter Phone Number' onChange={(e)=> setPhone(e.target.value)}/> <br />
            <button onClick={payHandler}>Submit</button>
        </form>
    </>
  )
}

export default App
