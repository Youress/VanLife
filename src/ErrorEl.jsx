import React from 'react'
import { useRouteError } from 'react-router'

export default function Error() {
  const error = useRouteError()
  console.log(error)  
  return (
      <h1>An error occured!</h1>
  )
}

