import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper } from '~/styles/wrapper';

import Routes from './routes';

export default function Problem({ match }) {
  return (
    <Wrapper>
      <Routes path={match.path} />
    </Wrapper>
  );
}

Problem.propTypes = {
  match: PropTypes.shape().isRequired,
};
