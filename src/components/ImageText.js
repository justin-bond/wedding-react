import React, { Component } from 'react';

const nsBase = 'component'
const ns = `image-text-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class ImageText extends Component {
  render() {
    const reverseClass = this.props.reverse ? 'reverse' : ''

    return (
      <div className={rootClassnames}>
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
    )
  }
}

export default ImageText;