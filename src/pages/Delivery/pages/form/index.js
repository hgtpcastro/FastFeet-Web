import React from 'react';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';

import Input from '~/components/Input';
import Title from '~/components/Title';

import { Wrapper, Header, Container } from './styles';

export default function FormPage() {
  return (
    <Wrapper>
      <Header>
        <Title title="Cadastro de encomendas" />

        <div>
          <Link to="/">
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
        <Form>
          <div className="two-inputs">
            <div>
              <label htmlFor="destinatario">Destinatário</label>
              <Input
                name="destinatario"
                id="destinatario"
                placeholder="Ludwig van Beethoven"
              />
            </div>
            <div>
              <label htmlFor="entregador">Entregador</label>
              <Input name="entregador" id="entregador" placeholder="John Doe" />
            </div>
          </div>

          <div>
            <label htmlFor="name-product">Nome do produto</label>
            <Input
              name="name-product"
              id="name-product"
              placeholder="Yamaha SX7"
            />
          </div>
        </Form>
      </Container>
    </Wrapper>
  );
}
