import PropTypes from 'prop-types';
import React from 'react';

import './Message.css';

function Message({ children }) {
  return (
    <div className="message">
      {(typeof children === 'string') ? <span>{children}</span> : children}
    </div>
  );
}

Message.propTypes = {
  children: PropTypes.node,
};

export default React.memo(Message);
