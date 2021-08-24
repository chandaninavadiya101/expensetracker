import './filter.css'

const Filter =(props)=>{
    const chnageHnadler =(event)=>{
        props.selectYear(event.target.value)
    }
    return(
        <div className='filter-ctn'>
            <h2 className='info'>Filter By Year</h2>
            <div className='options'>
                <select onChange={chnageHnadler}>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                </select>
            </div>
        </div>
    )
}


export default Filter;