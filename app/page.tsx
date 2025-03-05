'use client'

import { useState } from "react";



export default function Home() {
  const [inputValue, setInputValue] = useState("");

const handleSubmit = () => {
    console.log("Submitted", inputValue)
  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}
