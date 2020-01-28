import PropTypes from 'prop-types';
import React from 'react';

import Message from './Message';
import './MessageList.css';

function MessageList({ messages }) {
  return (
    <div className="messageList">
      {messages.map((message, index) => <Message key={index}>{message}</Message>)}
    </div>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.node),
};

MessageList.defaultProps = {
  messages: [],
};

export default MessageList;
