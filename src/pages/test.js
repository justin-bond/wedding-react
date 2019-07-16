import React from 'react'

import Rsvp from '../components/Rsvp'

const Test = (props) => {
  const {
    rsvp
  } = props

  const nsBase = 'page'
  const ns = `test-${nsBase}`
  const rootClassnames = `${nsBase} ${ns}`

  return (
    <div className={rootClassnames}>
      Hello!
      {
        rsvp &&
        <Rsvp />
      }
    </div>
  )
}

export default Test
