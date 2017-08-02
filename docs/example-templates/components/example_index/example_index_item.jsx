import React from 'react';

const ExampleIndexItem = ({ example }) => (
  <div className="example-index-item">
    <div className="index-item-info">
      <span className="index-item-category">String Variable: </span>
      <span className="index-item-copy">{example.string_variable}</span>
      <span className="index-item-category">Number Variable: </span>
      <span className="index-item-copy">{example.number_variable}</span>
    </div>
  </div>
);

export default ExampleIndexItem;
