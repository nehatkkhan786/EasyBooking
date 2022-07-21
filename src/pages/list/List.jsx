import React, { useState } from 'react'
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import './list.css';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options) 

  const [showDate, setShowDate] = useState(false)

  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="ListContainer">
        <div className="ListWrapper">
          <div className="ListSearch">
            <h1 className="searchTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" value={destination} onChange={(e)=>setDestination(e.target.value)} />
            </div> 
            <div className="lsItem">
              <label>Check in date </label>
              <span onClick={()=>setShowDate(!showDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} To ${format(date[0].endDate, "MM/dd/yyyy")}  ` }</span>
              {showDate &&(
                        <DateRange
                        onChange={(item)=>setDate([item.selection])}
                        minDate={new Date()}
                        ranges={date}
                        
                        />
                   )} 
            </div>  
            <div className="lsItem">
              <label>Options</label> 
              <div className="lsOptionItem">
                <span className="lsOptionText">Min Price<small>per night</small></span>
                <input type="number" className='lsOptionInput'/>
              </div>
            </div> 
          </div>
          <div className="ListResult"></div>

        </div>

      </div>
    </div>
  ) 
}

export default List 