import React, { useReducer } from 'react'
let currentstate=0;
function reducerfun(currentstate,action){//it also takes two argument first currentstate and action ,action may be incre.. and decrem...
switch(action){
    case 'increment':
        return currentstate+1;
        case 'decrement':
            return currentstate-1;
       default:
        return currentstate;     
}
}
const Usereducerhook = () => {
 const[count,dispatch]  = useReducer(reducerfun,currentstate);//takes two argument one reducerfun and initial state,dispatch fun call reducer function  ,count store the value of reducer function

  return (
   <>
   <div><h3>count is :{count}</h3> </div>
   <button onClick={()=>{dispatch('increment')}}>increment</button>
   <button onClick={()=>{dispatch('decrement')}}>decrement</button>
   </>
  )
}

export default Usereducerhook