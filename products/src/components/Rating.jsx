import React from 'react';

import Rating from '@material-ui/lab/Rating';
export default function Ratings(props) {
  return !props.value ? (
    <div></div>
  ) : (
    <div className="rating">
       <Rating name="half-rating-read" defaultValue={props.value} precision={0.1}  max={5}/>
        </div>
  );
}