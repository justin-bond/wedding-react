import React, { Component } from 'react'
import { animateScroll as scroll } from 'react-scroll';

import { CameraSVG } from '../svgIcons'
import { Ring } from '../svgIcons'

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
    const themeClass = this.props.theme ? this.props.theme : ''

    return (
      <div className={`${rootClassnames} ${themeClass}`}>
        <div className="container">
          <div className="row">
            <div className={`${ns}__wrapper`}>
              <div className={`${ns}__text`} data-hero-animate={this.state.heroTextAnimate}>
                <div className={`${ns}__title`} dangerouslySetInnerHTML={{ __html: this.props.title }} />
                <div className={`${ns}__description`}>
                  {this.props.description}
                </div>
                {this.props.rsvp &&
                  <div className={`${ns}__button`} onClick={()=>this.scrollTo('rsvp', 75)}>
                    <button className="btn--primary-white">RSVP</button>
                  </div>
                }
              </div>

              {this.props.image &&
                <div className={`${ns}__image`} data-hero-animate={this.state.heroImageAnimate}>
                  <img src={this.props.image.imageSrc} alt={this.props.image.imageAlt} />
                  {this.props.imageCred &&
                    <div className={`${ns}__image--text`}>
                      <div className={`${ns}__photo-cred`}>
                        <a href={this.props.imageCred.link} target="_blank" rel="noopener noreferrer">
                          <CameraSVG /> {this.props.imageCred.text}
                        </a>
                      </div>
                    </div>
                  }
                </div>
              }
            </div>
          </div>
        </div>
        {this.props.floatingImage &&
          <div className={`${ns}__floating-image`}>
            <Ring />
          </div>
        }
      </div>
    )
  }
}

export default Hero
