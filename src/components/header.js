import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import { Ring } from '../svgIcons'

const Header = () => {
  const nsBase = 'component'
  const ns = `header-${nsBase}`
  const rootClassnames = `${nsBase} ${ns}`

  const [navOpen, setNavOpen] = useState(false)
  const [buttonColor, setButtonColor] = useState('light')

  const openNav = () => {
    setNavOpen(!navOpen)
  }

  useEffect(() => {
    if (window.location.pathname === '/details') {
      setButtonColor('dark')
    } else {
      setButtonColor('light')
    }
  }, [navOpen])
  
  return (
    <div className={`${rootClassnames} ${navOpen ? 'nav-open ' : ''}`}>
      <div className={`${ns}__button ${buttonColor}`} onClick={openNav}><span>{navOpen ? 'close' : ''}</span>&nbsp;menu</div>
      <div className={`${ns}__wrapper`}>
        <div className={`${ns}__links`}>
          <div className={`${ns}__link`} onClick={openNav}>
            <Link to="/">home</Link>
          </div>
          <div className={`${ns}__link`}>
            <Link to="/details" onClick={openNav}>details</Link>
          </div>
        </div>
        <div className={`${ns}__floating-image`}>
          <Ring />
        </div>
      </div>
    </div>
  )
}

export default Header
