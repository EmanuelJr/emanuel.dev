import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Prefix = styled.span`
  margin-right: 0.5rem;
`;

function PromptPrefix({ prefix }) {
  return (
    <Prefix>{prefix}</Prefix>
  );
}

PromptPrefix.propTypes = {
  prefix: PropTypes.node.isRequired,
};

export default React.memo(PromptPrefix);
