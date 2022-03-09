import React from 'react'
import { useState } from 'react';

const GroceryInput = ({ onClick }) => {
    const [text, setText] = useState("");
    
  return (
    <>
       <input
       value={text}
       onChange={(e) => 
           setText(e.target.value)
        } />
       <button onClick={() => onClick(text)}>
           ADD
        </button>
    </>
  )
}

export default GroceryInput;