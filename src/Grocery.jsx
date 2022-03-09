import React, { useState } from 'react'
import GroceryInput from './GroceryInput';
import GroceryList from './GroceryList';
import { nanoid } from 'nanoid';

export const Grocery = () => {
    const [data, setData] = useState([]);
    const handleAdd = (title) => {
         const payload = {
             title,
             status: false,
             id: nanoid()
         }
         setData( [ ...data, payload] );
    }
    const handleDelete = (id) => {
        const newList = data.filter((item) => item.id !== id);
       setData(newList);
   }
  return (
    <div>
        <GroceryInput onClick = { handleAdd}/>
        {/* <GroceryList data={data} /> */}
        {data.map((item) => (
            <GroceryList 
             handleDelete = {handleDelete}
            key={item.id} {...item} />
        ))}
    </div>
  )
}



