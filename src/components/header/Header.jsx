import { faBed, faCalendar, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useState } from 'react'
import React from 'react'
import './header.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = ({type}) => {
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
          }
        ])
    const [showDate, setShowDate] = useState(false)
    const [showOptions, setShowOptions] = useState(false)
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1
    })

    const handleOptions =(name, operation)=>{
            setOptions(preState=>{return {
                ...preState, [name] :operation === 'i'? options[name] +1 :options[name] -1
            }})
    }

  return (
 
    <div className="header">
        <div className={type ? "headerContainer list" : "headerContainer"}>
        <div className="headerList">
            <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>

            <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>

            <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental</span>
            </div>

            <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>

            <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airpot Taxis</span>
            </div>
        </div>

        {type !== 'list' && (

            <>
                <h1 className='headerTitle'>
                    A lifetime of discount? It's genius.
        </h1>
        <p className='headerDesc'>Get rewared for your travels - unlock instant saving of 10% with a free Easy Booking account</p>
        <button className='headerBtn'>Sign in / Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon"/> 
                <input type="text" placeholder="Where are you going?" className="headerSearchInput"/>
            </div>

            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/> 
                <span onClick={()=>setShowDate(!showDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} To ${format(date[0].endDate, "MM/dd/yyyy")}  ` }</span>
                   {showDate &&(
                        <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        />
                   )}                        
            </div>

            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon"/> 
                <span onClick={()=>setShowOptions(!showOptions)}  className="headerSearchText">{` ${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                {showOptions && (
                    <>
                    <div className='options'>
                        <div className='optionItem'>
                            <span className='optionText'>Adult</span>
                            <div className='optionCounter'>
                                <button className='optionCouterButton' onClick={()=>handleOptions('adult', 'i')} >+</button>
                                <span className='optionCounterValue'>{options?.adult}</span>
                                <button className='optionCouterButton' disabled={options?.adult<1}  onClick={()=>handleOptions('adult', 'd')} >-</button>
                            </div>
                        </div>

                        <div className='optionItem'>
                            <span className='optionText' >Children</span>
                            <div className='optionCounter'>
                                <button className='optionCouterButton' onClick={()=>handleOptions('children', 'i')}>+</button>
                                <span className='optionCounterValue'>{options?.children}</span>
                                <button className='optionCouterButton' disabled={options?.children<1} onClick={()=>handleOptions('children', 'd')}>-</button>
                            </div>
                        </div>

                        <div className='optionItem'>
                            <span className='optionText'>Room</span>
                            <div className='optionCounter'>
                                <button className='optionCouterButton' onClick={()=>handleOptions('room', 'i')}>+</button>
                                <span className='optionCounterValue'>{options?.room}</span>
                                <button className='optionCouterButton'  disabled={options?.room<1} onClick={()=>handleOptions('room', 'd')}>-</button>
                            </div>
                        </div>
                    </div>
                    </>
                )}
            </div>

            <div className="headerSearchItem">
                <button className="headerSearchBtn">Search</button>
            </div>
            </div>
            </>
        )}
    </div>
    </div>
              
  )
}

export default Header