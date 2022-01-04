import React from 'react';

export const ProductImage = ({ image }) =>
  <figure className="elc-main-description__img">
    <img src={image}  className="elc-main-description__product-img" alt="Product" />
  </figure>
    