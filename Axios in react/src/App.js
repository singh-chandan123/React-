import React from 'react'
import Todolist from './Todolist'
import Axios_get_request from './Axios_get_request'
import Axios_post_method from './Axios_post_method'
const App = () => {
  return (
    <div>
     {/* <Todolist></Todolist>
    <Axios_get_request></Axios_get_request> */}
    <Axios_post_method></Axios_post_method>
    </div>
  )
}

export default App