import React from 'react';
import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function BtnRegister({ url }) {
  return (
    <Wrapper>
      <Link to={url}>
        <MdAdd size={16} color="#fff" />
        Cadastrar
      </Link>
    </Wrapper>
  );
}

BtnRegister.propTypes = {
  url: PropTypes.string.isRequired,
};
