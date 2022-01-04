import React from 'react';

import caret from './images/caret.png';
import minus from './images/minus.png';
import plus from './images/plus.png';

export const ProductPurchase = ({ price }) =>
  <section className="elc-main-description__price-wrapper">
    <div className="elc-main-description__quantity">
      Quantity <img src={minus} alt="Decrease Quantity"/> 1 <img src={plus} alt="Increase Quantity"/>
    </div>
    <div className="elc-main-description__otp">
      One Time Purchase  <img src={caret} alt="Select Frequency"/>
    </div>
    <div className="elc-main-description__price">{price}</div>
    <button className="elc-main-description__submit" name="AddToBag">Add To Bag</button>

  </section>