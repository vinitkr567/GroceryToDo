import React from 'react';
import { useState } from 'react';


const GroceryList = ({title, id, status, handleDelete }) => {
  return (
    <div>
        <h3>{title}
        <button onClick={()=> handleDelete(id)}>
           Delete
        </button>
        </h3>
        
    </div>
  )
}

export default GroceryList