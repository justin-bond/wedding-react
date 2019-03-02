import React, { Component } from 'react';

const nsBase = 'component'
const ns = `text-3up-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class Text3Up extends Component {

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
      <div className={rootClassnames}>
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