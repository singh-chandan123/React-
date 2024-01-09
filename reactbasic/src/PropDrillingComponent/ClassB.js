import React from 'react'
import ClassC from './ClassC'

const ClassB = ({newname}) => {
  return (
 <ClassC name={newname}></ClassC>
  )
}

export default ClassB