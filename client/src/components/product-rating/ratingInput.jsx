import React, { useState, useEffect } from 'react';
import RatingStar from './ratingstar';

import './ratingInput.scss'

function RatingInput() {
  return ( 
    <>
      <div className='ratinginput'>
        <div className='RI-title'>
          <span>給此商品的評論</span>
          <button>X</button>
        </div>
        <div>
          <RatingStar/>
        </div>

        <div className='RI-text'>
          <textarea type="text" placeholder='請輸入給商品的評價(限30字內)' />
        </div>

        <div className='RI-bottom'>
          <button>取消</button>
          <button>送出</button>
        </div>
      </div>
    </>
   );
}

export default RatingInput;