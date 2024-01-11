import React, { useState } from 'react'
import './Todolist.css'
const Todolist = () => {
  const[activity,setactivity]=useState('');
  const[arraylist,setarraylist]=useState([]);
  function clickevent(){
    //here array of list create
// setarraylist([...arraylist,activity])//here first array copy create then whatever in activity set on the array
setarraylist((arraylist)=>{
  const updatelist=[...arraylist,activity];
  // console.log(updatelist);
  setactivity('');//erase all words in input as sson as written in inputbox
return updatelist;
})

  }

//delete list func
function deletelistitem(ind){
  const update=arraylist.filter((ele,id)=>{
return ind!=id;
  })
  setarraylist(update);
}
//removeall function
function removeall()
{
  setarraylist([]);
} 
  return (
  <>
  <div className='container'>
<div className='header'>TO DO LIST</div>
<input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>{
  setactivity(e.target.value)
}}/>
<button className='buton' onClick={clickevent}>Add</button>
<p className='list-heading'>Here is your List{')-'}</p>
{arraylist!=[]&&arraylist.map((data,ind)=>{
return(

  <div>
 <p key={ind} className='todolist-heading'>{data} < button className='button' onClick={()=>{deletelistitem(ind)}} >remove</button> </p>
  
  </div>

 )
})}
{
  (arraylist.length>=1)&&<button className='buton last' onClick={removeall}>remove all</button>
    
}
  </div>
  </>
  )
}


export default Todolist