import axios from 'axios';
import React, { useState } from 'react'

const Axios_post_method = () => {
    const username=[{fname:'',lname:''}];
    const [data,setdata]=useState(username);
    function handleevent(e){
setdata({...data,[e.target.name]:e.target.value})
console.log(data);
    }
    function handleclick(e){
e.preventDefault();
axios.post('https://jsonplaceholder.typicode.com/users',data)
.then((response)=>{
    console.log(response);
})
    }
    function handledelete(e){
e.preventDefault();
axios.delete("https://jsonplaceholder.typicode.com/users/1")
.then((responsedata)=>{
    console.log(responsedata);
})
    }
  return (
    <div>
        <label> Enter first name</label>
        <input type='text'name='fname' value={username.fname} onChange={handleevent} /><br/>
        <label>Enter last name </label>
        <input type='text'name='lname' value={username.lname} onChange={handleevent}/><br/>
        <button className='button' onClick={handleclick}>submit</button>
        <button className='button' onClick={handledelete}>delete</button>

       
    </div>
  )
}

export default Axios_post_method