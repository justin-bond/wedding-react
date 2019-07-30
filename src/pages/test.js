import React from 'react'

import Hero from '../components/Hero'
import ImageText from '../components/ImageText'
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
      <Hero />
      <ImageText
        theme='venue'
        animateIn='true'
        reverse='true'
        image={{
          imageSrc: '/assets/images/aj_wedding_image_2.jpg',
          imageAlt: 'us2'
        }}
        title='Venue by Three Petals'
        content='Unfortunately, we aren’t affiliated with Airbnb. It would be nice though. Email us, Airbnb (wink).'
        floatingText='Venue'
      />
      <ImageText
        theme='venue'
        animateIn='true'
        image={{
          imageSrc: '/assets/images/aj_wedding_image_2.jpg',
          imageAlt: 'us2'
        }}
        title='Airbnb'
        content='Unfortunately, we aren’t affiliated with Airbnb. It would be nice though. Email us, Airbnb (wink).'
        floatingText='Stay'
      />
      {
        rsvp &&
        <Rsvp />
      }
    </div>
  )
}

export default Test
