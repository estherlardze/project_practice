'use client'

import { supabase } from "@/config";
import { useState } from "react";



export default function Home() {
  const [inputValue, setInputValue] = useState("");


 const createTodo = async() => {
   const {data, error} = await supabase.from('TodoList').insert({title: inputValue}) 

   if(error){
    console.log("Error", error)
   }
    console.log("Data", data)
 }

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button type="submit" onClick={createTodo}>Submit</button>
    </div>
  )
}
