import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint'

import { AmpersandSVG } from '../svgIcons'

const nsBase = 'component'
const ns = `rsvp-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class Rsvp extends Component {
  state = {
    animate: false,
    hideCodeForm: false,
    hideRsvpForm: true,
    formCode: '',
    formCodeError: '',
    formGuestName: '',
    formEmail: '',
    formYesNo: 'yes',
    formPartyNumber: '1',
    formPartyNames: '',
    formRsvpResponse: 'pending'
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
          <div className={`${ns}__form-input-wrapper`}>
            <label htmlFor="code">Wedding code</label>
            <input onChange={(e) => this.handleChange(e)} type="text" name="formCode" id="code" required/>
          </div>
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
          <input onChange={(e) => this.handleChange(e)} type="text" name="formGuestName" id="name" required/>
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
        {
          this.state.formYesNo === "yes" &&
          <div className={`${ns}__form-select-wrapper`}>
            <label htmlFor="guests">How many in your party</label>
            <div className="select-wrapper">
              <select
                name="formPartyNumber"
                id="guests"
                value={this.state.formPartyNumber}
                onChange={(e) => this.handleChange(e)}
              >
                <option value="1">Myself</option>
                <option value="2">Myself + 1</option>
                <option value="3+">Myself + 1 and/or kid(s)</option>
              </select>
            </div>
          </div>
        }
        {
          this.state.formYesNo === "yes" && this.state.formPartyNumber !== '1' &&
          <div className={`${ns}__form-input-wrapper`}>
            <label htmlFor="names">Name(s) of who’s in your party</label>
            <textarea onChange={(e) => this.handleChange(e)} type="textarea" name="formPartyNames" id="names" required/>
          </div>
        }
        <div className={`${ns}__form-submit-wrapper`}>
          <button type="submit" className="btn--primary">CONFIRM</button>
        </div>
      </form>
    )
  }

  submitRsvpForm(event) {
    event.preventDefault();
    
    const data = {
      formGuestName: this.state.formGuestName,
      formEmail: this.state.formEmail,
      formYesNo: this.state.formYesNo,
      formPartyNumber: this.state.formPartyNumber,
      formPartyNames: this.state.formPartyNames,
    };
    // console.log(data);

    fetch("https://www.justin-bond.com/sendmail/wedding-rsvp-end-point.php", {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    }).then(
      res => res.json()
    )
    .catch(
      error => console.error('Error:', error)
    )
    .then(
      response => {
        console.log('Success:', response);
        if (response['status'] === 1){
          this.setState({
            formRsvpResponse: 'accepted',
            hideRsvpForm: true
          });
        } else {
          this.setState({formRsvpResponse: response['error']});
        }
      }
    );

    // if (data.formYesNo === 'yes') {
    //   console.log('lets party!')
    // } else {
    //   console.log('boooo!')
    // }
  }

  render() {
    return (
      <Waypoint onEnter={this._handleEnter.bind(this)} onLeave={this._handleLeave.bind(this)} bottomOffset='100px'>
        <div id="rsvp" className={rootClassnames} data-animate={this.state.animate}>
          <div className={`${ns}__wrapper`}>
            <div className={`${ns}__text`}>
              <div className={`${ns}__text--copy`}>
                rsvp<br />celebrate
              </div>
              <div className={`${ns}__text--image`}>
                <AmpersandSVG />
              </div>
            </div>
            <div className={`${ns}__form--container`}>
              <div className={`${ns}__form--wrapper`}>
                {
                  !this.state.hideCodeForm &&
                  this.renderCodeForm()
                }
                {
                  !this.state.hideRsvpForm &&
                  this.renderRsvpForm()
                }
                {
                  this.state.formRsvpResponse !== 'pending' &&
                  this.state.formRsvpResponse !== 'accepted' &&
                  <div>
                    {this.state.formRsvpResponse}
                  </div>
                }
                {
                  this.state.hideRsvpForm &&
                  this.state.hideCodeForm &&
                  this.state.formYesNo === 'yes' &&
                  <div className={`${ns}__form--response`}>
                    <p><strong>Your RSVP has been confirmed, {this.state.formGuestName}!</strong></p>
                    <p>See you there and be ready to party!</p>
                  </div>
                }
                {
                  this.state.hideRsvpForm &&
                  this.state.hideCodeForm &&
                  this.state.formYesNo === 'no' &&
                  <div className={`${ns}__form--response`}>
                    <p><strong>Bummer! We’re sorry to hear that, {this.state.formGuestName}.</strong></p>
                    <p>Maybe, you can come to our baby shower in the future.</p>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </Waypoint>
    )
  }
}

export default Rsvp