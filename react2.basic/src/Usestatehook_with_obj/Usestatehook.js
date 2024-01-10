import React, { useState } from 'react'
import './Usestatehook.css'
const Usestatehook = () => {
    //usestate hook with object
    const[allname,setallname]=useState({name:"chandan",lastname:'singh'})//here we use object as parameter
function updatefun(){
setallname( {...allname,lastname:'thakur'});//spread operator makes copy and then we can rewrite any changes 
}
  return (
    <>
    <h2>my first name is {allname.name} and last name is {allname.lastname}</h2>
    <button className='update' onClick={updatefun}>update</button>
    </>
  )
}

export default Usestatehook