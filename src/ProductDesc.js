import React from 'react';

import caret from './images/caret.png';

export const ProductDesc = ({ category, name, description, rating, features, shade }) =>
  <section className="elc-main-description">
    <h4 className="elc-main-description__cat">{category}</h4>
    <h2 className="elc-main-description__name">{name}</h2>
    <p className="elc-main-description__desc">{description}</p>
    <figure className="elc-main-description__product-rating">
      <img src={rating} alt="Product Rating" />
      <img src={caret} alt="View All Ratings" />
    </figure>
    <section className="elc-main-description__product-attributes">
      <div className="elc-main-description__benefits-wrapper">
        <h4 className="elc-main-description__benefits-title">Benefits</h4>
        <p className="elc-main-description__benefits-features">{features.benefits}</p>
      </div>
      <div className="elc-main-description__finish-wrapper">
        <h4 className="elc-main-description__finish-title">Finish</h4>
        <p className="elc-main-description__finish-features">{features.finish}</p> 
      </div>
      <div className="elc-main-description__coverage-wrapper">
        <h4 className="elc-main-description__coverage-title">Coverage</h4>
        <p className="elc-main-description__coverage-features">{features.coverage}</p>
      </div>
      <div className="elc-main-description__ingredients-wrapper">
        <h4 className="elc-main-description__ingredients-title">Key Ingredients</h4>
        <p className="elc-main-description__ingredients-features">{features.keyIngredients} <a href="http://www.clinique.com">More</a></p>
      </div>
    </section>
    <section className="elc-main-description__shade-wrapper">
      <span className="elc-main-description__shade-name">{shade.name}</span>
      <div className="elc-main-description__shade-color" style={{ background: shade.color }}></div>
    </section>
  </section>
