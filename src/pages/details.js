import React from 'react'

import Hero from '../components/Hero'
import ImageText from '../components/ImageText'
import Image2Up from '../components/Image2Up'
import TextBlock from '../components/TextBlock'
import Text2Up from '../components/Text2Up'

const Test = (props) => {
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
      <Image2Up
        theme='venue'
        animateIn='true'
        items={[
          {
            imageSrc: '/assets/images/aj_wedding_image_2.jpg',
            imageAlt: 'us2',
            title: 'Honeymoon <br />Fund'
          },
          {
            imageSrc: '/assets/images/aj_wedding_image_2.jpg',
            imageAlt: 'us2',
            title: 'Registry'
          }
        ]}
      />
      <Text2Up
        theme='registry'
        items={[
          {
            text: 'Gift Registration'
          },
          {
            text: 'We are blessed with such great people in our lives. Your precense is definitely enough. For those who wish to contribute to '
          },
        ]}
       />
      <TextBlock 
        id='seeYou'
        animateIn='true'
        content='See You There!' 
        trailingLine='true'
      />
    </div>
  )
}

export default Test
