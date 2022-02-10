import React from 'react';

const Badge = ({ background, flag, display}) => {
  return (
    <span className={`badge bg-${background}`}>
      { display }
    </span>
  )
};

export default Badge;
