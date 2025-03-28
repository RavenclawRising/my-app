import React from 'react';
import QuickRating from './QuickRating';
import Radio from './radio';
import AdjustableSlider from './AdjustableSlider';

const ReviewABook = () => {
  return (
    <div>
        <AdjustableSlider />
        <QuickRating />
        <Radio />
    </div>
  )
}

export default ReviewABook