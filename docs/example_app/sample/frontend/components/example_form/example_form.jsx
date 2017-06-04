import React from 'react';

class ExampleComponentStateful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stringVariable: "",
      numberVariable: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const example = Object.assign({}, {
      string_variable: this.state.stringVariable,
      number_variable: this.state.numberVariable
    });
    this.props.createExample({ example });
  }

  render() {
    const { stringVariable, numberVariable } = this.state;

    return (
      <div className="new-example-container">
        <div className="new-example-form">
          <h3 className="new-example-title">Create an example!</h3>

          <form onSubmit={this.handleSubmit}>
            <label
              htmlFor="string-variable"
              className="example-field"
            >String Variable
              <input
                id="string-variable"
                type="text"
                value={stringVariable}
                onChange={this.update("stringVariable")}
                className="example-field"
              />
            </label>
            <label
              htmlFor="integer-variable"
              className="example-field"
            >Number Variable
              <input
                id="integer-variable"
                type="number"
                value={numberVariable}
                onChange={this.update("numberVariable")}
                className="example-field"
              />
            </label>

            <hr />

            <div className="button-holder">
              <input
                type="submit"
                value="Create Example"
                className="new-example-button"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ExampleComponentStateful;
