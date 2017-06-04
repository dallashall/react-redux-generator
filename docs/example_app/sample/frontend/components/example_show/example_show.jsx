import React from 'react';

const ExampleShow = ({ example }) => (
  <div>
    <ul className="example-list">
      <li>String Variable: {example.stringVariable}</li>
      <li>Number Variable: {example.numberVariable}</li>
    </ul>
  </div>
);

export default ExampleShow;
