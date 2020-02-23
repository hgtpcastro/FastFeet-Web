import React from 'react';
import { NavLink } from 'react-router-dom';

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
              <StyledLink aactiveClassName="active" to="/deliverymans">
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
          <NavLink to="/">sair do sistema</NavLink>
        </Right>
      </Header>

      <Container>{children}</Container>
    </Wrapper>
  );
}

Default.propTypes = {
  children: PropTypes.element.isRequired,
};
