import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Homepage = () => {
    //usenavigation hook -used to navigate from one component to another
    const num=15;
    const navigation=useNavigate();

    function gotoaboutpage(){
navigation("/about",{state:{num:num}});
    }
  return (
   <>
   <div>Homepage</div>
 {/* <Link to="/contactus"> Contact </Link> */}
 <button onClick={gotoaboutpage}>about page </button>
   </>
  )
}

export default Homepage