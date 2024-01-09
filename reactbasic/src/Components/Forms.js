import React from 'react'
import './Forms.css'
 const Forms = () => {
    function reflectchange(e){
console.log(e.target.className,e.target.value);
    }
  return (
  <>
     <input type="text" className='alphabet'onChange={reflectchange} placeholder='enter text' />
     <button className='buton1'>submit</button>
     <input type="text" className='numbering'onChange={reflectchange} placeholder='enter number..' />
     <button className='buton1'>submit</button>
  </>
 
 
  )
}
export default Forms
