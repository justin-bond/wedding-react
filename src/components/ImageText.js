import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint'

const nsBase = 'component'
const ns = `image-text-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class ImageText extends Component {
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
    const reverseClass = this.props.reverse ? 'reverse' : ''

    return (
      <Waypoint onEnter={this._handleEnter.bind(this)} onLeave={this._handleLeave.bind(this)} bottomOffset='100px'>
        <div className={rootClassnames} data-animate={this.state.animate}>
          <div className="container">
            <div className={`${ns}__wrapper ${reverseClass}`}>
              <div className={`${ns}__item ${ns}__image`}>
                <img src={this.props.image.imageSrc} alt={this.props.image.imageAlt} />
              </div>
              <div className={`${ns}__item ${ns}__text`}>
                <div className={`${ns}__text--wrapper`}>
                  <div className={`${ns}__item--title`}>
                    {this.props.title}
                  </div>
                  <div className={`${ns}__item--content`}>
                    {this.props.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Waypoint>
    )
  }
}

export default ImageText