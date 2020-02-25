import React from 'react';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Title from '~/components/Title';

import { Wrapper, Header, Container } from './styles';

export default function Form() {
  return (
    <Wrapper>
      <Header>
        <Title title="Cadastro de destinatários" />

        <div>
          <Link to="list">
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
        <form noValidate autoComplete="off">
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              placeholder="Ludwig van Beethoven"
              id="name"
              name="name"
            />
          </div>
          <div className="three">
            <div className="street">
              <label htmlFor="rua">Rua</label>
              <input
                type="text"
                placeholder="Rua Beethoven"
                id="rua"
                name="rua"
              />
            </div>
            <div className="number">
              <label htmlFor="numero">Número</label>
              <input type="text" placeholder="1729" id="numero" name="numero" />
            </div>

            <div className="complement">
              <label htmlFor="complemento">Complemento</label>
              <input type="text" id="complemento" name="complemento" />
            </div>
          </div>
          <div className="three">
            <div className="city">
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                placeholder="Diadema"
                id="cidade"
                name="cidade"
              />
            </div>
            <div className="state">
              <label htmlFor="estado">Estado</label>
              <input
                type="text"
                placeholder="São Paulo"
                id="estado"
                name="estado"
              />
            </div>
            <div className="cep">
              <label htmlFor="cep">CEP</label>
              <input type="text" placeholder="09960-580" id="cep" name="cep" />
            </div>
          </div>
        </form>
      </Container>
    </Wrapper>
  );
}
