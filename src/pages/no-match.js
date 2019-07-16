import React from 'react'
import { Link } from "react-router-dom"

const Test = (props) => {
  const nsBase = 'page'
  const ns = `no-match-${nsBase}`
  const rootClassnames = `${nsBase} ${ns}`

  return (
    <div className={rootClassnames}>
      <p>Error 404</p>
      <p><Link to="/">Home</Link></p>
    </div>
  )
}

export default Test;
