import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Message from './Message';

const ListWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

function MessageList({ messages }) {
  return (
    <ListWrapper>
      {messages.map((message, index) => <Message key={index}>{message}</Message>)}
    </ListWrapper>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.node),
};

MessageList.defaultProps = {
  messages: [],
};

export default MessageList;
