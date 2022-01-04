import React from 'react';
import { ProductDesc } from './ProductDesc';
import { ProductImage } from './ProductImage';
import { ProductPurchase } from './ProductPurchase';

import './styles/product.scss';

export const Product = ({ productData: { imgURL, category, name, description, ratingURL, features, shade, price } }) =>
  <main className="elc-main">
    <div className="elc-main__product-image-wrapper">
      <h4 className="elc-main__cat">{category}</h4>
      <ProductImage image={imgURL} />
    </div>
    <div className="elc-main__description">
      <ProductDesc 
        category={category}
        name={name}
        description={description}
        rating={ratingURL} 
        features={features} 
        shade={shade} />
      <hr/>
      <ProductPurchase price={price} />
    </div>
 </main>
