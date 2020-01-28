import PropTypes from 'prop-types';
import React from 'react';

import './PromptPrefix.css';

function PromptPrefix({prefix}) {
  return (
    <span className="prompt-prefix">{prefix}</span>
  );
}

PromptPrefix.propTypes = {
  prefix: PropTypes.node.isRequired,
};

export default PromptPrefix;
