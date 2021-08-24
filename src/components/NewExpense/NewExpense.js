import './new-expense.css'
import { useState } from 'react'
const NewExpense=(props)=>{
    const [title,setTitle]=useState('')
    const [amount,setAmount]=useState('')
    const [date,setDate]=useState('')
    const titleChnageHandler =(event)=>{
        setTitle(event.target.value)
    }
    const amountChnageHandler =(event)=>{
        setAmount(event.target.value)
    }
    const dateChnageHandler =(event)=>{
        setDate(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const input_data=
            {
                title:title,
                amount:amount,
                date:date
            }
        
        props.onSave(input_data)
        setAmount('')
        setDate('')
        setTitle('')
    }
    return(
        
        <form className='ctn' onSubmit={submitHandler}>
            <div className='top'>
                <input type='text' placeholder='Enter Title' value={title} onChange={titleChnageHandler}/>
                <input type='number' placeholder='Enter Amount' min='0.01' step='0.01' value={amount} onChange={amountChnageHandler}/>
                <input type='date' min='2020-01-01' max='2023-12-30' value={date} onChange={dateChnageHandler}/>
            </div>
            <div className='bottom'>
                <button type='submit'>Insert Entries</button>
            </div>
        </form>
    )
}

export default NewExpense;