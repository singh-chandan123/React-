import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const About = () => {
    //uselocation hook -used to access variable which are pass from usenavigation hook
const number=useLocation();
  return (
    <>
    <div>it is about page and my number is {number.state.num}  </div>
    <Link to="/">Homepage</Link>
    </>
  )
}

export default About