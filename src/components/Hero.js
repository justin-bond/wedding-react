import React, { Component } from 'react'

import { AmpersandSVG } from '../svgIcons'
import { CameraSVG } from '../svgIcons'

const nsBase = 'component'
const ns = `hero-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class Hero extends Component {
  state = {
    heroImageAnimate: false,
    heroTextAnimate: false,
    heroImageTextAnimate: false,
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

    if (this.state.heroTextAnimate && !this.state.heroImageTextAnimate) {
      setTimeout(function() {
        self.setState({
          heroImageTextAnimate: true
        })
      }, 500)
    }
  }


  render() {
    return (
      <div className={rootClassnames}>
        <div className={`${ns}__wrapper`}>
          <div className={`${ns}__text`} data-hero-animate={this.state.heroTextAnimate}>
            <div className={`${ns}__text--wrapper`}>
              <div className={`${ns}__name`}>
                <div className={`${ns}__name--text`}>
                  aileen<br />justin
                </div>
                <div className={`${ns}__name--image`}>
                  <AmpersandSVG />
                </div>
              </div>
              {
                this.props.rsvp &&
                <div className={`${ns}__name--button`}>
                  <button className="btn--primary-white">RSVP</button>
                </div>
              }
            </div>
          </div>

          <div className={`${ns}__image`} data-hero-animate={this.state.heroImageAnimate}>
            <img src="/assets/images/aj_wedding_image_hero.jpg" alt="Aileen & Justin" />
            <div className={`${ns}__image--text`} data-hero-animate={this.state.heroImageTextAnimate}>
              <div className={`${ns}__photo-cred`}>
                <a href="https://www.keilifernando.com/" target="_blank" rel="noopener noreferrer">
                  <CameraSVG /> KEILI FERNANDO
                </a>
              </div>
              <div className={`${ns}__date`}>
                NOVEMBER 3RD, 2019
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
