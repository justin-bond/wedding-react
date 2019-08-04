import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint'
import { Link } from "react-router-dom"

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
                {this.props.button &&
                  <div className={`${ns}__button`}>
                    <Link to={this.props.button.link}>
                      <button className="btn btn--primary">
                        {this.props.button.text}
                      </button>
                    </Link>
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

export default TextBlock
