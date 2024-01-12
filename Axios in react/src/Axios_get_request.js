import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios_get_request = () => {
    //if we want to set data in our application so we have to use usestate hook
    const[userdata,setuserdata]=useState([]);
    useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    // console.log(response.data);
    setuserdata(response.data);
})
    },[])
  return (
    //display in application by using map function
   <>
   {
   userdata.map((data)=>{
return(
    <div>
<p>    {data.email}</p>
    </div>
)
   })
   }


   </>
  )
}

export default Axios_get_request