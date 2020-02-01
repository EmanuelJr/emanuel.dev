import PropTypes from 'prop-types';
import React from 'react';

import './HelpList.css';

const HelpList = ({ list }) => (
  <div className="helpTable">
    {
      list.map(({ name, description }) => (
        <div className="helpRow" key={name}>
          <div>{name}</div>
          <div>{description}</div>
        </div>
      ))
    }
  </div>
);

HelpList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default HelpList;
