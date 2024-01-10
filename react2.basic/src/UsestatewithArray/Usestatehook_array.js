import React, { useState } from 'react'

const Usestatehook_array = () => {
    const [num,setnum]=useState([]);
   function addfunction(){
    setnum([...num,{
        id:num.length,
        value:Math.random()
    }])
   }
  return (
  <>
  <button className='update' onClick={addfunction}>addlist</button>
  <ul>
 {
    num.map((item)=>(
<li key={item.id}>
{item.value}
</li>
    
    ))}
 
  </ul>
  </>
    
  )
}

export default Usestatehook_array