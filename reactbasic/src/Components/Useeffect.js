import React, { useEffect, useState } from 'react'
//userfect allows you to perform side effects in your components,used in fetching data, directly updating the DOM, and timers.
//take two function one for execute fun second optional  
//it run everytime when we reload the page 
 const Useeffect = () => {
    const [data,setdata]=useState(0);
    const [num,setnum]=useState(5);
    //usestate function
   function updatedata(){
    setdata(data+1);
   }
   function updatenum(){
    setnum(num+1);
   }
   //useeffect function
   useEffect(()=>{
    console.log("called useeffect function");//it call every time when usestate fun called to stop this w have to pass blank array
   },[num])//if we want to run updatenum then we have to pass it within array 
  return (
   <div>
<h2> your data is :{data}</h2>
< button onClick={updatedata}>updatedata</button>
<h2> your num is :{num}</h2>
< button onClick={updatenum}>updatenum</button>

   </div>
  )
}
export default Useeffect
