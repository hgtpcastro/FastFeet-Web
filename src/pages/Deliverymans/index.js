import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper } from '~/styles/wrapper';

import Routes from './routes';

export default function DeliveryMan({ match }) {
  return (
    <Wrapper>
      <Routes path={match.path} />
    </Wrapper>
  );
}

DeliveryMan.propTypes = {
  match: PropTypes.shape().isRequired,
};
