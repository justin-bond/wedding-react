import React, {useEffect} from 'react'

import Hero from '../components/Hero'
import ImageText from '../components/ImageText'
import Image2Up from '../components/Image2Up'
import TextBlock from '../components/TextBlock'
import Text2Up from '../components/Text2Up'

const Details = (props) => {
  const nsBase = 'page'
  const ns = `details-${nsBase}`
  const rootClassnames = `${nsBase} ${ns}`

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={rootClassnames}>
      <Hero 
        theme="details"
        title="the <br />details"
        description="IF YOU'RE CURIOUS"
        image={{
          imageSrc: '/assets/images/aj_wedding_image_hero_details.jpg',
          imageAlt: 'Aileen & Justin'
        }}
        imageCred={{
          link: 'http://Klifproductions.com/',
          text: 'KEILI FERNANDO'
        }}
        floatingImage={true}
      />
      <ImageText
        theme='venue'
        animateIn='true'
        reverse='true'
        image={{
          imageSrc: '/assets/images/details_venue.jpg',
          imageAlt: 'venue'
        }}
        title='Venue by Three Petals'
        content='Our venue is located in beautiful Huntington Beach California.'
        button={{
          link: 'https://www.google.com/maps/dir//the+venue+by+three+petals/',
          text: 'GET ME THERE'
        }}
        floatingText='Venue'
      />
      <Image2Up
        theme='venue'
        animateIn='true'
        items={[
          {
            imageSrc: '/assets/images/details_registry_honeymoon.jpg',
            imageAlt: 'registry-honeymoon',
            title: 'Honeymoon <br />Fund',
            link: 'https://www.travelersjoy.com/justinandaileen'
          },
          {
            imageSrc: '/assets/images/details_registry_cratebarrel.jpg',
            imageAlt: 'registry-crate-barrel',
            title: 'Registry',
            link: 'https://www.crateandbarrel.com/gift-registry/aileen-almazora-and-justin-bond/r6017404'
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
            text: 'We are blessed with such great people in our lives. Your presence is definitely enough. For those who wish to contribute to '
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

export default Details
