import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
  return (
    <div>
        <h1>Oops! Something went wrong.</h1>
        <h2>{err.status} - {err.statusText}</h2>
        <p>Please check the URL or return to the home page.</p>
        <Link to="/">Go to Home</Link>
    </div>
  )
}

export default Error