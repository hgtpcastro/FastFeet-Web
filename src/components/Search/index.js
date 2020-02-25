import React from 'react';
import { MdSearch } from 'react-icons/md';

import PropTypes from 'prop-types';

import { Input } from './styles';

export default function Search({ titleSearch }) {
  return (
    <Input>
      <MdSearch size={16} color="#999999" />
      <input type="text" placeholder={`Buscar por ${titleSearch}`} />
    </Input>
  );
}

Search.propTypes = {
  titleSearch: PropTypes.string.isRequired,
};
