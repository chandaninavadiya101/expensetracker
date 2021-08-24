import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import ExpenseItems from './components/ExpenseItems/ExpenseItems'
import NewExpense from './components/NewExpense/NewExpense'
import Filter from './components/Filter/Filter'
let initial_entries=[
  {
    
    title:'Mobile bill',
    amount:'1500',
    date:'2020-11-13'
  },
  {
    title:'Shopping',
    amount:'2500',
    date:'2020-08-13'
  }
];

function App() {
  const selectedYear=(year)=>{
    data.forEach((item)=>{
      console.log("top")
      setYearData([])
      if(parseInt(item.date.substring(0,5))===year){
        setYearData([...yearData,item])
      }
    })
  }
  const [data,setData]=useState(initial_entries)
  const [yearData,setYearData] = useState(data)
  const saveHandler =(dataReceived)=>{
    if(dataReceived.title.length===0 || dataReceived.date.length===0 || dataReceived.amount.length < 2){
      alert("wrong input")
      return;
    }
    setData((prevExpense) =>{
      return [dataReceived,...prevExpense]
    })
  }
  return (
    <div className="App">
      <NewExpense onSave={saveHandler}></NewExpense>
      <Card className='Card'>
        <Filter selectYear={selectedYear} ></Filter>
        {data.map(entries=><ExpenseItems title={entries.title} amount={'Rs.'+entries.amount} date={entries.date}></ExpenseItems>)}
      </Card>
    </div>
  );
}

export default App;
