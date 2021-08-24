import './expense-items.css'

const ExpenseItems =(props)=>{
    return(
        <div className='expense_items'>
            <div className='date-ctn'>
                <h2 className='date'>{props.date}</h2>
            </div>
            <div className='title-ctn'>
                <h2 className='date'>{props.title}</h2>
            </div>
            <div className='amount-ctn'>
                <h2 className='date'>{props.amount}</h2>
            </div>
        </div>
    )
}


export default ExpenseItems;