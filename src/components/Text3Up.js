import React, { Component } from 'react';

const nsBase = 'component'
const ns = `text-3up-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class Text3Up extends Component {
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
      <div id={this.props.id} className={rootClassnames} data-animate={this.state.animate}>
        <div className="container">
          <div className="row">
            <div className={`${ns}__wrapper`}>
              {this.props.items.map(this.renderItem)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Text3Up;