import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  width: 100%;
  word-break: break-all;
`;

function Message({ children }) {
  return (
    <MessageWrapper>
      {(typeof children === 'string') ? <span>{children}</span> : children}
    </MessageWrapper>
  );
}

Message.propTypes = {
  children: PropTypes.node,
};

export default React.memo(Message);
