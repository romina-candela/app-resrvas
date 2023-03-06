import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faHouse, faPerson } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import { useNavigate } from 'react-router-dom';



export const Header = ({type}) => {
const [destination, setDestination] = useState("");
const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate ("/list", {state:{destination,date,options}})
  };



  return (
    <div className="header">
      <div className= { type === "list" ? "headerContainer listMode": "headerContainer"}>
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faHouse}/>
            <span>Home</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Alojamientos</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane}/>
            <span>Viajes</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar}/>
            <span>Vehículos</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faStar}/>
            <span>Extras</span>
            </div>
        </div>

        { type !== "list" &&
        <>
        <h1 className="h1headerTitle"> Encontrá y administrá tus próximas reservas en un solo lugar!!</h1>
        <p className="headerDesc"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <button className='headerBtn'>Registrase Ahora!</button>
        <div className="headerSearch">

          <div className="headerSerchItem">
            <FontAwesomeIcon icon= {faBed} className="headerIcon"/>
            <input 
              type="text"
              placeholder="Where re you going?" 
              className="headerSearchInput"
              onChange={e=>setDestination(e.target.value)}
              />
          </div>

          <div className="headerSerchItem">
            <FontAwesomeIcon icon= {faCalendarDay} className="headerIcon"/>
            <span onClick={()=> setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")}
            al ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>

            { openDate && (<DateRange
            editableDateInputs={true}
            onChange={ (item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
            />
            )}
            
          </div>

          <div className="headerSerchItem">
            <FontAwesomeIcon icon= {faPerson} className="headerIcon"/>
            <span onClick={()=>setOpenOptions (!openOptions)} className="headerSearchText">{`${options.adult} Adult · ${options.children} Children · ${options.room} Room`}</span>

            {openOptions  && <div className="options">
              <div className="optionsItem">
                <span className="optionsText">Adultos</span>
                <div className="optionCounter">
                  <button disabled = {options.adult <= 1}
                  className="optionCounterButton" 
                  onClick={()=> handleOptions ("adult", "d")}> - </button>
                  <span className="optionsCounterNumber">{options.adult}</span>
                  <button className="optionCounterButton" onClick={()=> handleOptions ("adult", "i")}> + </button>
                </div>
              </div>

              <div className="optionsItem">
                <span className="optionsText">Niños</span>
                <div className="optionCounter">
                  <button disabled = {options.children <= 0}
                  className="optionCounterButton" 
                  onClick={()=> handleOptions ("children", "d")}> - </button>
                  <span className="optionsCounterNumber">{options.children}</span>
                  <button className="optionCounterButton" onClick={()=> handleOptions ("children", "i")}> + </button>
                </div>
              </div>

              <div className="optionsItem">
                <span className="optionsText">Habitaciones</span>
                <div className="optionCounter">
                  <button disabled = {options.room <= 1}
                  className="optionCounterButton" 
                  onClick={()=> handleOptions ("room", "d")}> - </button>
                  <span className="optionsCounterNumber">{options.room}</span>
                  <button className="optionCounterButton" onClick={()=> handleOptions ("room", "i")}> + </button>
                </div>
              </div>

            </div>}
          </div>

          <div className="headerSerchItem">
            <button className="headerBtn" onClick={handleSearch}>Buscar</button>
          </div>

        </div></>}
      </div>

    </div>
  );
};

export default Header;