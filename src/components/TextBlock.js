import React, { Component } from 'react';

const nsBase = 'component'
const ns = `text-block-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class TextBlock extends Component {
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
    let scrollPos = _window.scrollY - 50
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
    const trailingLineClass = this.props.trailingLine ? 'trailing-line' : ''

    return (
      <div id={this.props.id} className={rootClassnames} data-animate={this.state.animate}>
        <div className="container">
          <div className="row">
            <div className={`col-xs-12 ${trailingLineClass}`}>
              {this.props.content}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TextBlock;
