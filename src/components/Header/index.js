import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-header.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const [activePage, setActivePage] = useState('active');

  function handleActive() {}

  return (
    <Container>
      <Content active>
        <nav>
          <img src={logo} alt="Logo FastFeet" />
          <Link to="/delivery" className={activePage}>
            Encomendas
          </Link>
          <Link to="/deliverymans">Entregadores</Link>
          <Link to="/recipients">Destinatários</Link>
          <Link to="/problems">Problemas</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Admin FastFeet</strong>
              <Link to="/profile">Sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
