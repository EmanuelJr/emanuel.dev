import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const HelpRow = styled.div`
  display: flex;

  & div {
    flex-grow: 1;
    flex-basis: 0;
  }

  & div:first-child {
    padding-left: 5rem;
  }

  & div:last-child {
    flex-grow: 9;
  }
`;

const HelpList = ({ list }) => list.map(({ name, description }) => (
  <HelpRow key={name}>
    <div>{name}</div>
    <div>{description}</div>
  </HelpRow>
));

HelpList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default HelpList;
