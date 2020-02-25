import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper } from '~/styles/wrapper';

import Routes from './routes';

export default function Package({ match }) {
  return (
    <Wrapper>
      <Routes path={match.path} />
    </Wrapper>
  );
}

Package.propTypes = {
  match: PropTypes.shape().isRequired,
};
