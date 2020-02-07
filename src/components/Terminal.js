import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import MessageList from './MessageList';
import Prompt from './Prompt';
import PromptPrefix from './PromptPrefix';
import processor from '../utils/processor';

const TerminalContent = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-flow: column;
  background: #000;
  color: #bbb;
  font-family: monospace;
  white-space: pre;
  font-size: 1rem;
`;

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
        {this.props.promptPrefix}
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
      <TerminalContent>
        <MessageList messages={this.state.messages} />
        <Prompt
          prefix={this.props.promptPrefix}
          onSubmit={text => this.onSubmit(text)}
          onClean={_ => this.clear()}
        />
      </TerminalContent>
    );
  }
}

const terminalPrefix = <PromptPrefix prefix="$" />;

Terminal.propTypes = {
  commands: PropTypes.object,
  messages: PropTypes.arrayOf(PropTypes.node),
  promptPrefix: PropTypes.node.isRequired,
};

Terminal.defaultProps = {
  commands: {},
  messages: [],
  promptPrefix: terminalPrefix,
};

export default Terminal;
