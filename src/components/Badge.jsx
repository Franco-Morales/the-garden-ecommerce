import React from 'react';

const Badge = ({ background, flag, display}) => {
  return (
    <span className={`ms-4 badge bg-${background}`}>
      { display }
    </span>
  )
};

export default Badge;
