import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import logo from '~/assets/logo-header.svg';

import {
  Wrapper,
  Header,
  Left,
  Division,
  Right,
  Container,
  StyledLink,
} from './styles';

export default function Default({ children }) {
  return (
    <Wrapper>
      <Header>
        <Left>
          <img src={logo} alt="FastFeet" />
          <Division />
          <ul>
            <li>
              <StyledLink activeClassName="active" to="/delivery">
                Encomendas
              </StyledLink>
            </li>
            <li>
              <StyledLink activeClassName="active" to="/deliverymans">
                Entregadores
              </StyledLink>
            </li>
            <li>
              <StyledLink activeClassName="active" to="/recipients">
                Destinatários
              </StyledLink>
            </li>
            <li>
              <StyledLink activeClassName="active" to="/problems">
                Problemas
              </StyledLink>
            </li>
          </ul>
        </Left>
        <Right>
          <strong>Admin FastFeet</strong>
          <Link to="/">sair do sistema</Link>
        </Right>
      </Header>

      <Container>{children}</Container>
    </Wrapper>
  );
}

Default.propTypes = {
  children: PropTypes.element.isRequired,
};
