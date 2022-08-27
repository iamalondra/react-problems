import React, { useState } from "react";
import DisplayList from "../DisplayList/DisplayList";
import './Accordion.css'
export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div>
      <button onClick={handleClick}>text <span className={!isOpen? "carrot rotate" : ""}>^</span></button>
      <div className={`${!isOpen? "hidden" : "display-list"}` }>
        <DisplayList />
      </div> 
    </div>
  );
}
