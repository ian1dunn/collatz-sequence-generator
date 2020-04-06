import React from 'react';

import './CollatzSequenceForm.css';

function checkInteger(value) {
  return /^\d+$/.test(value);
}

export default class CollatzSequenceForm extends React.Component {
  state = {
    number: '',
    isInteger: false
  };

  handleNumberUpdate = (event) => {
    this.setState({
      number: event.target.value,
      isInteger: checkInteger(event.target.value)
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.isInteger) return;

    this.props.onSubmit(parseInt(this.state.number));

    this.setState({
      number: '',
      isInteger: false
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.isInteger ? null : (
          <label className="warning">Must be a positive integer!</label>
        )}
        <input
          name="number"
          value={this.state.number}
          onChange={this.handleNumberUpdate}
          placeholder="Enter a number"
        ></input>
        <button type="submit">Generate Sequence</button>
      </form>
    );
  }
}
