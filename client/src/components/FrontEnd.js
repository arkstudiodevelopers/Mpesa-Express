import React from 'react';
import {useState} from 'react';
import axios from 'axios';

function FrontEnd() {
    const [phone, setPhone]= useState()
    const [amount, setAmount]= useState()

    const payHandler = (event)=>{
        event.preventDefault();
        Axios.post("")
    }

  return (
    <div>
        <form className='render-content'>
            <label>Amount</label>
            <input type="number" id="amount" name="amount" placeholder='Emter Amount' onChange={(e)=> setAmount(e.target.value)}/> <br />
            <label>Phone Number</label>
            <input type='number' id="phone-number" name="phone-number" placeholder='Enter Phone Number' onChange={(e)=> setPhone(e.target.value)}/> <br />
            <button onClick={payHandler}>Submit</button>
        </form>
    </div>
  )
}

export default FrontEnd