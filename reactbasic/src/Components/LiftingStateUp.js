import React, { useState } from 'react'

 const LiftingStateUp = (props) => {
    const [name,setname]=useState();
    function changefun(e){
setname(e.target.value);
    }
    function handlesubmit(e){
        e.preventDefault();
props.getdata(name);//here we send name parameter to parent getdata function as parameter
    }
  return (
    <div>
        <form onSubmit={handlesubmit} >
           <input type='text 'placeholder="enter name" value={name} onChange={changefun}  />
           <button type="submit" >submit</button>
        </form>
    </div>
    
  )
}
export default LiftingStateUp
