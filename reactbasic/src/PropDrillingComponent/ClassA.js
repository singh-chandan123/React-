import React from 'react'
import ClassB from './ClassB'

const ClassA = ({name}) => {
  return (
   <ClassB newname={name}></ClassB>
  )
}

export default ClassA