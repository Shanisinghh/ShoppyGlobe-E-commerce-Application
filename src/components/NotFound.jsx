import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <>
    <div className='not-found-container'>
        <div className='not-found'>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist</p>
            <Link to="/"><button className="btn">Go Back Home</button></Link>
        </div>
    </div>
    </>
  )
}

export default NotFound