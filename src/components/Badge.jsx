import React from 'react';


const Badge = ({ background, display, otherClass="" }) => {
  return (
    <span className={`badge bg-${background} ${otherClass}`}>
      { display }
    </span>
  )
};


export default Badge;