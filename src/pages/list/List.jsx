import React from 'react';
import "./List.css";

import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem'; 


const List = () => {

  const location = useLocation();
  const [destination, setDestination]= useState (location.state.destination);
  const [date, setDate]= useState (location.state.date);
  const [openDate, setOpenDate]= useState (false);
  const [options,setOptions]= useState (location.state.options);
  

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper"> 
          <div className="listSearch">
            <h1 className="lsTitle">Buscar</h1>
            <div className="lsItem">
              <label>Destino</label>
              <input placeholder={destination}type="text" />
            </div >

            <div className="lsItem">
              <label>Check-in date</label>
              <span onClick={()=> setOpenDate (!openDate)}>
              {`${format(date[0].startDate,"MM/dd/yyyy")}
              to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>

              {openDate && (<DateRange
                onChange={item=>setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              /> )}
            </div>
            
            <div className="lsItem">
            <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Precio Min<small> - por noche</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Precio Max<small> - por noche</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Adultos</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Niños</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Habitaciones</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>

            <button>Buscar</button>

          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>        
      </div>      
    </div>
  )
}

export default List;



/*

            

          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>

          </div>
        </div>
      </div>
    </div> 
  )
}

export default List; */

