import React, { useContext } from 'react'
import { user1 } from '../App'

const Child3 = () => {
    //her we recieve value first by using usecontext
    const name=useContext(user1);
const gen=useContext(user1);
const Age=useContext(user1);
const hei=useContext(user1);
  return (
    <h2>my name is {name.user} and my gender is {gen.gender} and my age is {Age.age} and my height is {hei.height}</h2>//here we access value of obj by using .operator
    
  )
}

export default Child3