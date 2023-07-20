import React from 'react';
import './productRating.scss'

const ProductRating = (props) => {
  const { productRating } = props;

  const getRatingStars = (rating) => {
    const star = '★';
    const emptyStar = '☆';
    return star.repeat(rating) + emptyStar.repeat(5 - rating);
  };

  const datePart = productRating.RatingDate.split('T')[0];

  // 最終的日期格式（只包含年月日）



  return (
    <>

      <hr />
      <div className="rating-comment">
        <div className="buyer-info">
          <div className="buyer-image">
            <img src={`http://localhost:8000/img/${productRating.profilePictureSrc}`} alt="Buyer" />
          </div>
          <div className="buyer-id">
            {productRating.Buyer}
          </div>
        </div>
        <div className="rating">
          {getRatingStars(productRating.Rating)}
        </div>
        <div className="comment">
          <p>{productRating.Comment}</p>
          <p className="rating-date">{datePart}</p>
        </div>
      </div>
    </>
  );
};

export default ProductRating;
