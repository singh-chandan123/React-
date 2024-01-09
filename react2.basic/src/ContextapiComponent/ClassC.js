import React from 'react'
import {data,user} from '../App'
const ClassC = () => {
    //data .consumer return only one function so several createcontext api return several function which will lead to callback hell
  return (
<data.Consumer>
{
    (val1)=>{
return(
    <user.Consumer>
{
    (val2)=>{
return (
    <h2>name is {val1} and second name is {val2}</h2>
)
    }
}
    </user.Consumer>
)
    }
}
</data.Consumer>
  )
}

export default ClassC;