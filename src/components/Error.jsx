import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
  return (
    <div>
        <h1>Oops! Something went wrong.</h1>
        <h2>{err.status} - {err.statusText}</h2>
        <p>Please check the URL or return to the home page.</p>
        <a href="/">Go to Home</a>
    </div>
  )
}

export default Error