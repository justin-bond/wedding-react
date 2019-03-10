import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint'

const nsBase = 'component'
const ns = `text-3up-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class Text3Up extends Component {
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

  renderItem(item) {
    return (
      <div className={`${ns}__item col-md-4`} key={item.eyebrow}>
        <div className={`${ns}__item--eyebrow`}>
          {item.eyebrow}
        </div>
        <div className={`${ns}__item--text`}>
          {item.text}
        </div>
      </div>
    )
  }

  render() {
    return (
      <Waypoint onEnter={this._handleEnter.bind(this)} onLeave={this._handleLeave.bind(this)} bottomOffset='100px'>
        <div className={rootClassnames} data-animate={this.state.animate}>
          <div className="container">
            <div className="row">
              <div className={`${ns}__wrapper`}>
                {this.props.items.map(this.renderItem)}
              </div>
            </div>
          </div>
        </div>
      </Waypoint>
    )
  }
}

export default Text3Up