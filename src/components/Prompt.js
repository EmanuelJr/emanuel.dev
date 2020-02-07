import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const PromptField = styled.div`
  display: flex;
`;

const PromptInput = styled.textarea`
  background: transparent;
  color: #bbb;
  border: none;
  width: 100%;
  height: auto;
  overflow: hidden;
  font-size: 1rem;
  word-break: break-word;
`;

class Prompt extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.state = {
      text: '',
      history: [],
      historyIndex: 1,
    };
  }

  componentDidUpdate() {
    const inputRef = this.input.current;
    inputRef.style.height = `${inputRef.scrollHeight}px`;
  }

  setText(text) {
    const newText = text.replace(/\n/g, '');

    this.setState({
      text: newText,
    });
  }

  onKeyDown(event) {
    const key = event.which || event.keyCode;

    if (event.ctrlKey && key === 76) {
      event.preventDefault();
      this.props.onClean();
      return;
    }

    if (key === 38) {
      event.preventDefault();

      if (this.state.historyIndex - 1 < 0) {
        return;
      }

      this.setState((state) => ({
        text: state.history[state.historyIndex - 1],
        historyIndex: state.historyIndex - 1,
      }));
      return;
    }

    if (key === 40) {
      event.preventDefault();

      if (this.state.historyIndex + 1 >= this.state.history.length) {
        this.setState((state) => ({
          text: '',
          historyIndex: state.history.length,
        }));
        return;
      }

      this.setState((state) => ({
        text: state.history[state.historyIndex + 1],
        historyIndex: state.historyIndex + 1,
      }));
      return;
    }

    if (key === 13) {
      event.preventDefault();
      this.props.onSubmit(this.state.text);

      if (this.state.text !== '') {
        this.setState((state) => {
          const history = [
            ...state.history,
            this.state.text,
          ];

          return {
            ...state,
            history,
            historyIndex: history.length,
          };
        });
      }

      this.setState(() => ({
        text: '',
      }));
    }
  }

  render() {
    return (
      <PromptField>
        {this.props.prefix}
        <PromptInput
          ref={this.input}
          autoFocus
          rows={1}
          onChange={e => this.setText(e.target.value)}
          onKeyDown={e => this.onKeyDown(e)}
          value={this.state.text}
        />
      </PromptField>
    );
  }
}

Prompt.propTypes = {
  prefix: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
  onClean: PropTypes.func,
};

Prompt.defaultProps = {
  prefix: '$',
  onClean: () => {},
};

export default Prompt;
