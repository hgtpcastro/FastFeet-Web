import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function DropDown({ showMenu, isLarge, children }) {
  return (
    <Wrapper showMenu={showMenu} isLarge={isLarge}>
      {children}
    </Wrapper>
  );
}

DropDown.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  isLarge: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};
