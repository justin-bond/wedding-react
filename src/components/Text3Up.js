import React, { Component } from 'react';

const nsBase = 'component'
const ns = `text-3up-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class Text3Up extends Component {

  render() {
    return (
      <div className={rootClassnames}>
        <div className="container">
          <div className="row">
            <div className={`${ns}__wrapper`}>
              <div className={`${ns}__item col-md-4`}>
                <div className={`${ns}__item--eyebrow`}>
                  WHAT
                </div>
                <div className={`${ns}__item--text`}>
                  Aileen & Justin’s<br/>wedding celebration 
                </div>
              </div>
              <div className={`${ns}__item col-md-4`}>
                <div className={`${ns}__item--eyebrow`}>
                  WHERE
                </div>
                <div className={`${ns}__item--text`}>
                  The Nursery by<br/>SouthWinds in Irvine CA
                </div>
              </div>
              <div className={`${ns}__item col-md-4`}>
                <div className={`${ns}__item--eyebrow`}>
                  WHEN
                </div>
                <div className={`${ns}__item--text`}>
                  November 3rd, 2019<br/>5pm - 10pm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Text3Up;