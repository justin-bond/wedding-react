import React, { Component } from 'react';

import { AmpersandSVG } from '../svgIcons';
import { CameraSVG } from '../svgIcons';

const nsBase = 'component'
const ns = `hero-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class Hero extends Component {
  render() {
    return (
      <div className={rootClassnames}>
        <div className={`${ns}__wrapper`}>
          <div className={`${ns}__text`}>
            <div className={`${ns}__text--wrapper`}>
              <div className={`${ns}__name`}>
                <div className={`${ns}__name--text`}>
                  aileen<br />justin
                </div>
                <div className={`${ns}__name--image`}>
                  <AmpersandSVG />
                </div>
              </div>
              <div className={`${ns}__name--button`}>
                <button className="btn--primary-white">RSVP</button>
              </div>
            </div>
          </div>

          <div className={`${ns}__image`}>
            <img src="/assets/images/hero.jpg" alt="Aileen & Justin" />
            <div className={`${ns}__image--text`}>
              <div className={`${ns}__photo-cred`}>
                <a href="https://www.keilifernando.com/" target="_blank" rel="noopener noreferrer">
                  <CameraSVG /> KEILI FERNANDO
                </a>
              </div>
              <div className={`${ns}__date`}>
                NOVEMBER 3RD, 2019
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
