import React, { Component } from 'react'

const nsBase = 'component'
const ns = `hero-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class Hero extends Component {
  state = {
    heroImageAnimate: false,
  }

  componentDidMount() {
    const self = this
    setTimeout(function() {
      self.setState({
        heroImageAnimate: true
      })
    }, 500)
  }

  render() {
    return (
      <div className={rootClassnames}>
        <div className={`${ns}__wrapper`}>
          <div className={`${ns}__image`} data-hero-animate={this.state.heroImageAnimate}>
            <img src="https://place-hold.it/1362x801" alt="hero" />
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
