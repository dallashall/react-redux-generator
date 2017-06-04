import React from 'react';
import ExampleIndexItem from './example_index_item';

const ExampleIndex = ({ examples }) => (
  <div>
    <h1>Examples: </h1>
    {examples.map(example => (
      <ExampleIndexItem example={example} key={example.id} />
    ))}
  </div>
);
