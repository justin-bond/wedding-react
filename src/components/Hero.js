import React, { Component } from 'react'
import { animateScroll as scroll } from 'react-scroll';

import { CameraSVG } from '../svgIcons'

const nsBase = 'component'
const ns = `hero-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class Hero extends Component {
  state = {
    heroImageAnimate: false,
    heroTextAnimate: false,
  }

  componentDidMount() {
    const self = this
    setTimeout(function() {
      self.setState({
        heroImageAnimate: true
      })
    }, 500)
  }

  componentDidUpdate() {
    const self = this

    if (this.state.heroImageAnimate && !this.state.heroTextAnimate) {
      setTimeout(function() {
        self.setState({
          heroTextAnimate: true
        })
      }, 500)
    }
  }

  scrollTo(anchor, offset) {
    if (document.getElementById(anchor) != null) {
      const anchorPosition = document.getElementById(anchor).getBoundingClientRect();
      scroll.scrollTo((anchorPosition.top + window.scrollY) - (offset ? offset : 0));
    }
  }

  render() {
    return (
      <div className={rootClassnames}>
        <div className={`${ns}__wrapper`}>
          <div className={`${ns}__text`} data-hero-animate={this.state.heroTextAnimate}>
            <div className={`${ns}__title`}>
              aileen<br /> & justin
            </div>
            <div className={`${ns}__description`}>
              NOVEMBER THIRD, TWENTY NINETEEN
            </div>
            {
              this.props.rsvp &&
              <div className={`${ns}__button`} onClick={()=>this.scrollTo('rsvp', 75)}>
                <button className="btn--primary-white">RSVP</button>
              </div>
            }
          </div>

          <div className={`${ns}__image`} data-hero-animate={this.state.heroImageAnimate}>
            <img src="/assets/images/aj_wedding_image_hero.jpg" alt="Aileen & Justin" />
            <div className={`${ns}__image--text`}>
              <div className={`${ns}__photo-cred`}>
                <a href="http://Klifproductions.com/" target="_blank" rel="noopener noreferrer">
                  <CameraSVG /> KEILI FERNANDO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
