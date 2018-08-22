import React from 'react';
import './Card.scss';

const Card = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card--content">
        <div className="card--content-title">
          <div>{title}</div>
          <div>...</div>
        </div>
        {children}
        <span className="card--content-add-card">Add a card...</span>
      </div>
    </div>
  );
};

export default Card;
