import React, { Component } from 'react';

const nsBase = 'component'
const ns = `text-block-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class TextBlock extends Component {
  render() {
    const trailingLineClass = this.props.trailingLine ? 'trailing-line' : ''

    return (
      <div className={rootClassnames}>
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
