import React from 'react';
import ExampleIndexItem from './example_index_item';

class ExampleIndex extends React.Component {

  componentDidMount() {
    this.props.fetchExamples()
  }

  render() {
    const { examples } = this.props
    return (
      <div>
        <h1>Examples: </h1>
        {examples.map(example => (
          <ExampleIndexItem example={example} key={example.id} />
        ))}
      </div>
    );
  }
}

export default ExampleIndex;
