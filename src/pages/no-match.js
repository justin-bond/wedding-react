import React from 'react'
import { Link } from "react-router-dom"

const NoMatch = (props) => {
  const nsBase = 'page'
  const ns = `no-match-${nsBase}`
  const rootClassnames = `${nsBase} ${ns}`

  return (
    <div className={rootClassnames} style={{marginTop:'50px'}}>
      <div className="container">
        <div className="row">
          <p>Error 404</p>
          <p><Link to="/">Home</Link></p>
        </div>
      </div>
    </div>
  )
}

export default NoMatch
