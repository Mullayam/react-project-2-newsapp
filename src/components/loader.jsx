import React from 'react'
import loading from "./loader.gif"

const  loader= ()=> {
 
    return (
      <div className='text-center'>
         <img src={loading} alt="loading"></img>
      </div>
    )
  }


export default loader