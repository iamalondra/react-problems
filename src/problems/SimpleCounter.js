import React, {useState} from "react";

export default function SimpleCounter(){

const [counter, setCounter] = useState(0)

const handleClick = () => {
  setCounter((currentCount) =>  currentCount + 1)
}

  return(
    <>
    <button onClick = {handleClick}> counter </button>
    {counter}
    </>
    
  );
}