import React from 'react'
import { Link } from "react-router-dom"

const Test = () => {
  const nsBase = 'component'
  const ns = `hero-${nsBase}`
  const rootClassnames = `${nsBase} ${ns}`
  
  return (
    <div className={rootClassnames}>
      <Link to="/">Home</Link>
      <Link to="/details">Details</Link>
    </div>
  )
}

export default Test
