import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint'

const nsBase = 'component'
const ns = `text-2up-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class Text2Up extends Component {
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

  renderItem(item, index) {
    return (
      <div className={`${ns}__item col-md-6`} key={index}>
        {item.eyebrow &&
          <div className={`${ns}__item--eyebrow`}>
            {item.eyebrow}
          </div>
        }
        {item.text &&
          <div className={`${ns}__item--text`}>
            {item.text}
          </div>
        }
      </div>
    )
  }

  render() {
    const themeClass = this.props.theme ? this.props.theme : ''

    return (
      <Waypoint onEnter={this._handleEnter.bind(this)} onLeave={this._handleLeave.bind(this)} bottomOffset='100px'>
        <div className={`${rootClassnames} ${themeClass}`} data-animate={this.props.animateIn === 'true' ? this.state.animate : 'true'}>
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

export default Text2Up