import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint'

const nsBase = 'component'
const ns = `text-block-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class TextBlock extends Component {
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

  render() {
    const trailingLineClass = this.props.trailingLine ? 'trailing-line' : ''

    return (
      <Waypoint onEnter={this._handleEnter.bind(this)} onLeave={this._handleLeave.bind(this)} bottomOffset='25px'>
        <div className={rootClassnames} data-animate={this.state.animate}>
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 ${trailingLineClass}`}>
                {this.props.content}
              </div>
            </div>
          </div>
        </div>
      </Waypoint>
    )
  }
}

export default TextBlock
