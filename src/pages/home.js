import React from 'react'

import HeroHome from '../components/HeroHome'
import Hero from '../components/Hero'
import Text3Up from '../components/Text3Up'
import ImageText from '../components/ImageText'
import TextBlock from '../components/TextBlock'
import Rsvp from '../components/Rsvp'

const Home = (props) => {
  const {
    rsvp
  } = props

  const nsBase = 'page'
  const ns = `home-${nsBase}`
  const rootClassnames = `${nsBase} ${ns}`

  return (
    <div className={rootClassnames}>
      {
        false &&
        <HeroHome rsvp={rsvp}/>
      }
      <Hero rsvp={rsvp}/>
      <Text3Up 
        id='www'
        animateIn='true'
        items={[
          {
            eyebrow: 'WHAT',
            text: 'Aileen & Justin’s\nwedding celebration'
          },
          {
            eyebrow: 'WHERE',
            text: 'VENUE by\n Three Petals in Irvine, CA'
          },
          {
            eyebrow: 'WHEN',
            text: 'November 3rd, 2019\n4pm - 10pm'
          }
        ]}
      />
      <ImageText 
        theme='us-beach'
        animateIn='true'
        image={{
          imageSrc: '/assets/images/aj_wedding_image_1.jpg',
          imageAlt: 'us1'
        }}
        content='“Love is a promise; love is a souvenir, once given never forgotten, never let it disappear.”'
      />
      <ImageText
        theme='us-la'
        animateIn='true'
        reverse='true'
        image={{
          imageSrc: '/assets/images/aj_wedding_image_2.jpg',
          imageAlt: 'us2'
        }}
        title='I love you'
        content='Life is all about living through the good times and and the bad times. We go through each journey, one step at a time. Life shouldn’t be taken too seriously but instead, live in the moment.'
        floatingText='Nov 03'
      />
      {
        rsvp &&
        <Rsvp />
      }
      <TextBlock 
        id='stayTuned'
        animateIn='true'
        content='Stay tuned for more details.' 
        trailingLine='true'
      />
    </div>
  )
}

export default Home
