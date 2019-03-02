import React, { Component } from 'react';

const nsBase = 'component'
const ns = `image-text-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class ImageText extends Component {
  state = {
    animate: false
  }

  componentDidMount() {
    if (!this.props.animateIn) {
      this.setState({
        animate: true,
      });
    }

    if(this.props.id && this.props.animateIn) {
      window.addEventListener('scroll', this.handleScroll.bind(this))
    }
  }

  componentWillUnmount() {
    if(this.props.id && this.props.animateIn) {
      window.removeEventListener('scroll', this.handleScroll.bind())
    }
  }

  handleScroll() {
    let _window = window
    let offset = document.querySelector(`#${this.props.id}`).offsetTop
    let heightDiff = parseInt(offset)
    let scrollPos = _window.scrollY - 150
    let innerHeight = _window.innerHeight

    if (heightDiff < scrollPos+ innerHeight) {
      this.setState({
        animate: true,
      });
    } else {
      this.setState({
        animate: false,
      });
    }
  }

  render() {
    const reverseClass = this.props.reverse ? 'reverse' : ''

    return (
      <div id={this.props.id} className={rootClassnames} data-animate={this.state.animate}>
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