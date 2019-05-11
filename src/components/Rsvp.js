import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint'

import { AmpersandSVG } from '../svgIcons'

const nsBase = 'component'
const ns = `rsvp-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class Rsvp extends Component {
  state = {
    animate: false,
    hideCodeForm: true,
    hideRsvpForm: false,
    formCode: '',
    formCodeError: '',
    formGuestName: '',
    formEmail: '',
    formYesNo: 'yes',
    formPartyNumber: 'lime',
    formChildrenNuber: ''
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

  handleChange(e) {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  renderCodeForm() {
    return (
      <form className={`${ns}__code-form`} onSubmit={(e) => this.submitCodeForm(e)}>
        <div className={`${ns}__form-title`}>Enter your code</div>
        <div className={`${ns}__form-text`}>Enter the code you have received from your RSVP invitation below.</div>
        <div>
          <label htmlFor="code">Wedding code</label>
          <input onChange={(e) => this.handleChange(e)} type="text" name="formCode" id="code" required/>
          <span className={`${ns}__error`}>{this.state.formCodeError}</span>
        </div>              
        <div>
          <button type="submit" className="btn--primary">CONFIRM</button>
        </div>
      </form>
    )
  }

  submitCodeForm(event) {
    event.preventDefault();

    if (this.state.formCode === 'letsparty') {
      this.setState({
        formCodeError: '',
        hideCodeForm: true,
        hideRsvpForm: false
      });
    } else {
      this.setState({
        formCodeError: 'Please enter a correct code'
      });
    }
  }

  renderRsvpForm() {
    return (
      <form className={`${ns}__rsvp-form`} onSubmit={(e) => this.submitRsvpForm(e)}>
        <div className={`${ns}__form-input-wrapper`}>
          <label htmlFor="name">Guest Full Name</label>
          <input onChange={(e) => this.handleChange(e)} type="text" name="formName" id="name" required/>
        </div>
        <div className={`${ns}__form-input-wrapper`}>
          <label htmlFor="email">Email Address</label>
          <input onChange={(e) => this.handleChange(e)} type="email" name="formEmail" id="email" required/>
        </div>
        <div className={`${ns}__form-radio-wrapper`}>
          <div>
            <input
              type="radio"
              name="formYesNo"
              id="yes"
              value="yes"
              checked={this.state.formYesNo === "yes"}
              onChange={(e) => this.handleChange(e)}
            />
            <label htmlFor="yes">Yes, I’m down to party</label>
          </div>
          <div>
            <input
              type="radio"
              name="formYesNo"
              id="no"
              value="no"
              checked={this.state.formYesNo === "no"}
              onChange={(e) => this.handleChange(e)}
            />
            <label htmlFor="no">Sorry, I’m going to miss it</label>
          </div>
        </div>
        <div className={`${ns}__form-select-wrapper`}>
          <label htmlFor="guests">How many in your party</label>
          <div className="select-wrapper">
            <select value={this.state.formPartyNumber} onChange={(e) => this.handleChange(e)} id="guests">
              <option value="1">Myself</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
            </select>
          </div>
        </div>
        <div className={`${ns}__form-submit-wrapper`}>
          <button type="submit" className="btn--primary">CONFIRM</button>
        </div>
      </form>
    )
  }

  submitRsvpForm(event) {
    event.preventDefault();
    
    const data = {
      code: this.state.formCode
    };
  }

  render() {
    return (
      <Waypoint onEnter={this._handleEnter.bind(this)} onLeave={this._handleLeave.bind(this)} bottomOffset='100px'>
        <div className={rootClassnames} data-animate={this.state.animate}>
          <div className={`${ns}__wrapper`}>
            <div className={`${ns}__form--container`}>
              <div className={`${ns}__form--wrapper`}>
                {
                  this.state.hideRsvpForm &&
                  this.renderCodeForm()
                }
                {
                  this.state.hideCodeForm &&
                  this.renderRsvpForm()
                }
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