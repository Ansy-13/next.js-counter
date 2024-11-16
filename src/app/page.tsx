"use client";
import { useState } from "react";

export default function Home() {
  let [Counter, setCounter] = useState(0);

  function handleClick() {
    if (Counter < 20) {
      setCounter(Counter + 1);
    }

 
  }

  function Remove(){
    if(Counter>=1){
      setCounter(Counter-1)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-6 mt-10  ">
      <h1>Counter:{Counter}</h1>
      <button onClick={handleClick} className="border-2 border-black rounded-md text-black hover:bg-blue-900 hover:text-white p-2">Add value </button>
      <br/>
      <button onClick={Remove} className="border-2 border-black rounded-md text-black hover:bg-blue-900 hover:text-white p-2">remove value </button>
    </div>
  );
}
