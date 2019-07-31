import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint'

const nsBase = 'component'
const ns = `image-2up-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class Image2Up extends Component {
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
    const themeClass = this.props.theme ? this.props.theme : ''

    return (
      <Waypoint onEnter={this._handleEnter.bind(this)} onLeave={this._handleLeave.bind(this)} bottomOffset='100px'>
        <div className={`${rootClassnames} ${themeClass}`} data-animate={this.state.animate}>
          <div className="container">
            <div className={`${ns}__wrapper`}>
              {this.props.items.map((item, index) => {
                return (
                  <div className={`${ns}__item`} key={index}>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                      <div className={`${ns}__image`}>
                        <img src={item.imageSrc} alt={item.imageAlt} />
                      </div>
                      {item.title &&
                        <div className={`${ns}__item--title`} dangerouslySetInnerHTML={{ __html: item.title }} />
                      }
                    </a>
                  </div>
                 )
              })}
            </div>
          </div>
        </div>
      </Waypoint>
    )
  }
}

export default Image2Up