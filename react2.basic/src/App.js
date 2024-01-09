import { createContext, useMemo, useState } from 'react'
import ClassA from './ContextapiComponent/ClassA'
import ClassC from './ContextapiComponent/ClassC';
import Child1 from './Contexthook/Child1';
  //create context api for solving droppulling problem
  //data provider provides value 
  const data= createContext();
  //create another contextapi
  const user=createContext();
//create contextapi 
const user1=createContext();//here we pass valuse as object so we dont need to create multiple createcontext


const App = () => {
  const name="chandan singh";
const secondname="thakur";
const [num,setnum]=useState(0);
const [num1,setnum1]=useState(10);

const multiplies=useMemo(function mul(){//useMemo increase optimization
  // console.log("*");
  return num*10;
},[num]);//work on addition dependency only 
  return (
  
<div>

  <data.Provider value={name}>
    <user.Provider value={secondname}>
    <ClassA></ClassA>    
  </user.Provider >
  </data.Provider>
<br></br>
<user1.Provider value={{user:'chandan',gender:'male',age:22,height:'5.11'}}>
<Child1></Child1 >
</user1.Provider>
<br></br>
<h1>
  Use of usememo function which is used to increase performance and optimize code
  <br>
  </br>
  {multiplies}<br></br>
  <button onClick={()=>{
    setnum(num+1);
  }}>Addition</button>
  <span>{num}</span><br></br>
  <button onClick={()=>{
    setnum1(num1-1);
  }}>Subtraction</button><span>{num1}</span>
</h1>


</div>

  )
}

export default App
export {data,user}
export {user1}