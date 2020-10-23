import React from 'react';
import './App.css'
function Box(props) {
  return (
    <div className="Box" onKeyDown={props.keyDown} tabIndex={props.id} id={props.id}>
        <p>{props.id}</p>
    </div>
  );
}

export default Box;
