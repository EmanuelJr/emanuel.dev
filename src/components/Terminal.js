import PropTypes from 'prop-types';
import React, { Component } from 'react';

import MessageList from './MessageList';
import Prompt from './Prompt';
import PromptPrefix from './PromptPrefix';
import processor from '../processor';
import './Terminal.css';

class Terminal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: props.messages,
    };
  }

  onSubmit(rawText) {
    const text = rawText.trim();

    const message = (
      <>
        <PromptPrefix prefix={this.props.promptPrefix} />
        <span>{text}</span>
      </>
    );

    const terminal = {
      commands: this.props.commands,
    };

    const value = text === '' ? null : processor(terminal, text);

    this.setState({
      messages: [
        ...this.state.messages,
        message,
        value,
      ],
    });
  }

  clear() {
    this.setState({
      messages: [],
    });
  }

  render() {
    return (
      <div className="terminal">
        <MessageList messages={this.state.messages} />
        <Prompt
          prefix={this.props.promptPrefix}
          onSubmit={text => this.onSubmit(text)}
          onClean={_ => this.clear()}
        />
      </div>
    );
  }
}

Terminal.propTypes = {
  commands: PropTypes.object,
  messages: PropTypes.arrayOf(PropTypes.node),
  promptPrefix: PropTypes.node.isRequired,
};

Terminal.defaultProps = {
  commands: {},
  messages: [],
  promptPrefix: '$',
};

export default Terminal;
