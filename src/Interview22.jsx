import React from 'react'
import { useState } from 'react';

const arr=["play cricket","play video game","play football"];

function Interview22() {
  const [state, setState] = useState(arr)

  let newarr=state
  const handledelete = (itemindex)=>{
    
    var filteredarray=newarr.filter((elem,i)=>{
      return i !== itemindex 
    })
    setState(filteredarray)
    
    
  }


   
    
    
   
  
  



  
  return (
    <>
      <h1>intttt</h1>
      <ul>
      {state.map((elem,index)=>{
        return(
          
            // <li style={{margin:"20px"}}>{elem}  <button onClick={(index)=>handledelete}>delete</button></li>
            <div>
            <input   type="checkbox"></input>
            <h3>{elem}<button onClick={()=>handledelete(index)}>delete</button> </h3>
            </div>
          
          
        )
      })}
      </ul>

    </>
  )
}

export default Interview22