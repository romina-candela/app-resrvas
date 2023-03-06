import React from 'react';
import "./MailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">It was popularised in the 1960s with the release of Letraset sheets</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Ingresa tu Email" />
        <button>Suscribete!</button>

      </div>
    </div>
  )
}

export default MailList;