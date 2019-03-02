import React, { Component } from 'react';
import Hero from './Hero';
import Text3Up from './Text3Up';
import ImageText from './ImageText';
import TextBlock from './TextBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Text3Up 
          items={[
            {
              eyebrow: 'WHAT',
              text: 'Aileen & Justin’s\nwedding celebration'
            },
            {
              eyebrow: 'WHERE',
              text: 'The Nursery by\nSouthWinds in Irvine CA'
            },
            {
              eyebrow: 'WHEN',
              text: 'November 3rd, 2019\n5pm - 10pm'
            }
          ]}
        />
        <ImageText 
          image={{
            imageSrc: 'http://dummyimage.com/528x543/4d494d/686a82.gif&text=528x543',
            imageAlt: 'Donuts!'
          }}
          title='Making it work'
          content='We truly believe that love and compromise makes a relationship grow. We make it work by not only telling each other “I love you” but, feeding each other donuts, Oreos, and pizza.'
        />
        <ImageText 
          reverse='true'
          image={{
            imageSrc: 'http://dummyimage.com/528x543/4d494d/686a82.gif&text=528x543',
            imageAlt: 'with taiga'
          }}
          title='What makes it complete'
          content='We truly believe that love and compromise makes a relationship grow. We make it work by not only telling each other “I love you” but, feeding each other donuts, Oreos, and pizza. '
        />
        <TextBlock content='Stay tuned for more details.' trailingLine='true'/>
        <div style={{height: '10px',backgroundColor: '#5D6750'}}></div>
      </div>
    );
  }
}

export default App;
