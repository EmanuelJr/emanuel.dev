import PropTypes from 'prop-types';
import React, { Component } from 'react';

import MessageList from './MessageList';
import Prompt from './Prompt';
import PromptPrefix from './PromptPrefix';
import processor from '../utils/processor';
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

    this.setState((state) => ({
      messages: [
        ...state.messages,
        message,
      ],
    }));

    const terminal = {
      terminal: this,
      commands: this.props.commands,
      clear: () => this.clear(),
      println: (message) => this.println(message),
    };

    if (text !== '') {
      processor(terminal, text)
    }
  }

  println(message) {
    this.setState((state) => ({
      messages: [
        ...state.messages,
        message,
      ],
    }));
  }

  clear() {
    this.setState(() => ({
      messages: [],
    }));
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
