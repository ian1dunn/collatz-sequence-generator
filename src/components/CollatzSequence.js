import React from 'react';

import './CollatzSequence.css';

import CollatzSequenceForm from './CollatzSequenceForm';
import calculateSequence from '../utils/calculateSequence';

export default class CollatzSequence extends React.Component {
  state = {
    sequence: [],
    copyText: 'Copy Sequence'
  };

  calculate = (number) => {
    this.setState({
      sequence: calculateSequence(number),
      copyText: 'Copy Sequence'
    });
  };

  copySequence = (event) => {
    var dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.setAttribute('value', this.state.sequence.join(','));
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    this.setState({ copyText: 'Copied!' });
  };

  render() {
    return (
      <div className="sequence">
        <CollatzSequenceForm onSubmit={this.calculate} />
        {this.state.sequence.length > 0 ? (
          <p>
            <b>{this.state.sequence[0]}</b> - Length:{' '}
            {this.state.sequence.length}
          </p>
        ) : null}
        <textarea
          readOnly
          value={this.state.sequence
            .map((num, i) => '#' + i + ': ' + num)
            .join('\n')}
        />
        {document.queryCommandSupported('copy') &&
          (this.state.sequence.length > 0 ? (
            <button onClick={this.copySequence}>{this.state.copyText}</button>
          ) : null)}
      </div>
    );
  }
}
