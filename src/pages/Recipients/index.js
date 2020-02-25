import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper } from '~/styles/wrapper';

import Routes from './routes';

export default function Recipient({ match }) {
  return (
    <Wrapper>
      <Routes path={match.path} />
    </Wrapper>
  );
}

Recipient.propTypes = {
  match: PropTypes.shape().isRequired,
};
