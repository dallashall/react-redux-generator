import React from 'react';

const ExampleIndexItem = ({ stringVariable, numberVariable }) => (
  <div className="example-index-item">
    <div className="index-item-info">
      <span className="index-item-category">String Variable: </span>
      <span className="index-item-copy">{stringVariable}</span>
      <span className="index-item-category">Number Variable: </span>
      <span className="index-item-copy">{numberVariable}</span>
    </div>
  </div>
);

export default ExampleIndexItem;
