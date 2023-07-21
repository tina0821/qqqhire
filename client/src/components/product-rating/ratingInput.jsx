import React, { useState, useEffect } from 'react';
import RatingStar from './ratingstar';


import './ratingInput.scss'

function RatingInput() {
  const [openclose,setopenclose] = useState(0)
  const [rating, setRating] = useState(0); 

  
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const openrating = (state) =>{
    setopenclose(state)
  }



  return ( 
    <>
      <button onClick={()=>{openrating(1)}}>給評</button>
      {openclose===1?(
        <div className='ratinginput'>
          <div className='RI-title'>
            <span>給此商品的評論</span>
            <button onClick={()=>{openrating(2)}}>X</button>
          </div>
          <div>
          <RatingStar rating={rating} onRatingChange={handleRatingChange} />
          </div>

          <div className='RI-text'>
            <textarea type="text" placeholder='請輸入給商品的評價(限30字內)' />
          </div>

          <div className='RI-bottom'>
            <button onClick={()=>{openrating(2)}}>取消</button>
            <button>送出</button>
          </div>
        </div>
      ):null}
    </>
   );
}

export default RatingInput;