import React from 'react';
import ExampleShowContainer from './example_show/example_show_container';
import ExampleIndexContainer from './example_index/example_index_container';
import ExampleFormContainer from './example_form/example_form_container';

const App = () => (
  <div>
    <header>
      <h1>Example</h1>
    </header>
    <ExampleShowContainer />
    <ExampleIndexContainer />
    <ExampleFormContainer />
  </div>
);

export default App;
