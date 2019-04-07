import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint'

import { AmpersandSVG } from '../svgIcons'

const nsBase = 'component'
const ns = `rsvp-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class Rsvp extends Component {
  state = {
    animate: false
  }

  _handleEnter(props) {
    this.setState({
      animate: true,
    })
  }

  _handleLeave(props) {
    if (props.currentPosition === 'below') {
      this.setState({
        animate: false,
      })
    }
  }

  renderForm() {
    return (
      <form className={`${ns}__form`} action="#" method="post">
        <div>
          <label for="name">Text Input:</label>
          <input type="text" name="name" id="name" value="" tabindex="1" />
        </div>              
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }

  render() {
    return (
      <Waypoint onEnter={this._handleEnter.bind(this)} onLeave={this._handleLeave.bind(this)} bottomOffset='100px'>
        <div className={rootClassnames} data-animate={this.state.animate}>
          <div className={`${ns}__wrapper`}>
            <div className={`${ns}__form--container`}>
              <div className={`${ns}__form--wrapper`}>
                {this.renderForm()}
              </div>
            </div>
            <div className={`${ns}__text`}>
              <div className={`${ns}__text--copy`}>
                rsvp<br />celebrate
              </div>
              <div className={`${ns}__text--image`}>
                <AmpersandSVG />
              </div>
            </div>
          </div>
        </div>
      </Waypoint>
    )
  }
}

export default Rsvp