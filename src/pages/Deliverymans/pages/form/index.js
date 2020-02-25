import React from 'react';
import { MdChevronLeft, MdCheck, MdImage } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Title from '~/components/Title';

import { Wrapper, Header, Container } from './styles';

export default function Form() {
  return (
    <Wrapper>
      <Header>
        <Title title="Cadastro de entregadores" />

        <div>
          <Link to="lista">
            <div>
              <div className="icon">
                <MdChevronLeft size={20} color="#FFFFFF" />
              </div>
              Voltar
            </div>
          </Link>

          <button type="button">
            <div>
              <div className="icon">
                <MdCheck size={20} color="#FFFFFF" />
              </div>
              Salvar
            </div>
          </button>
        </div>
      </Header>
      <Container>
        <form>
          <div className="img">
            <div>
              <label htmlFor="image">
                <MdImage size={40} color="#DDDDDD" />
                <p>Adicionar foto</p>
              </label>
              <input hidden type="file" name="image" id="image" />
            </div>
          </div>
          <div>
            <label htmlFor="name">Nome</label>
            <input placeholder="John Doe" />

            <label htmlFor="email">Email</label>
            <input placeholder="example@rocketseat.com" />
          </div>
        </form>
      </Container>
    </Wrapper>
  );
}
