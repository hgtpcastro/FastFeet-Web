import React, { useState, useEffect } from 'react';
import { GiPlainCircle } from 'react-icons/gi';
import { MdRemoveRedEye, MdEdit, MdDeleteForever } from 'react-icons/md';

import Button from '~/components/BtnRegister';
import Search from '~/components/Search';
import Title from '~/components/Title';

import {
  Wrapper,
  Header,
  Table,
  THead,
  TBody,
  Initials,
  Status,
  Menu,
  Modal,
} from './styles';

const userFake = [
  {
    id: '01',
    destinatario: 'Ludwig van Beethoven',
    entregador: 'John Doe',
    iniciais: 'JD',
    cidade: 'Rio do Sul',
    estado: 'Santa Catarina',
    statusText: 'Cancelado',
    canceled: true,
    withdrawal: false,
    delivered: false,
    pending: false,
    showMenu: false,
  },
  {
    id: '02',
    destinatario: 'Wolfgang Amadeus',
    entregador: 'Gaspar Antunes',
    iniciais: 'GA',
    cidade: 'Rio do Sul',
    estado: 'Santa Catarina',
    statusText: 'Entregue',
    canceled: false,
    withdrawal: true,
    delivered: false,
    pending: false,
    showMenu: false,
  },
  {
    id: '03',
    destinatario: 'Johann Sebastian Bach',
    entregador: 'Dai Jiang',
    iniciais: 'DJ',
    cidade: 'Rio do Sul',
    estado: 'Santa Catarina',
    statusText: 'Retirada',
    canceled: false,
    withdrawal: false,
    delivered: true,
    pending: false,
    showMenu: false,
  },
  {
    id: '04',
    destinatario: 'Frédéric Chopin',
    entregador: 'Tom Hanson',
    iniciais: 'TH',
    cidade: 'Rio do Sul',
    estado: 'Santa Catarina',
    statusText: 'Pendente',
    canceled: false,
    withdrawal: false,
    delivered: false,
    pending: true,
    showMenu: false,
  },
];

export default function List() {
  const [packages, setPackages] = useState(userFake);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.onclick = ({ target }) => {
      if (showModal && target.id === 'modal') {
        setShowModal(false);
      }
    };
  }, [showModal]);

  function handleMenu(id) {
    const newBbj = packages.map(item => {
      if (item.id === id) {
        item.showMenu = !item.showMenu;
      } else {
        item.showMenu = false;
      }
      return item;
    });

    setPackages(newBbj);
  }

  function handlePreview() {
    setPackages(
      packages.map(item => {
        item.showMenu = false;
        return item;
      })
    );
    setShowModal(!showModal);
  }

  return (
    <Wrapper>
      <Title title="Gerenciando encomendas" />

      <Header>
        <Search titleSearch="encomedas" />
        <Button url="add" />
      </Header>
      <Table>
        <THead>
          <li>ID</li>
          <li>Destinatário</li>
          <li>Entregador</li>
          <li>Cidade</li>
          <li>Estado</li>
          <li>Status</li>
          <li>Ações</li>
        </THead>
        <TBody>
          {packages.map(item => (
            <ul key={item.id}>
              <li>#{item.id}</li>
              <li>{item.destinatario}</li>
              <li>
                <Initials
                  canceled={item.canceled}
                  delivered={item.delivered}
                  pending={item.pending}
                >
                  {item.iniciais}
                </Initials>
                <span>{item.entregador}</span>
              </li>
              <li>{item.cidade}</li>
              <li>{item.estado}</li>
              <li>
                <Status
                  canceled={item.canceled}
                  delivered={item.delivered}
                  pending={item.pending}
                >
                  <span>{item.statusText}</span>
                </Status>
              </li>
              <li>
                <div className="actions" onClick={() => handleMenu(item.id)}>
                  <GiPlainCircle size={5} color="#666666" />
                  <GiPlainCircle size={5} color="#666666" />
                  <GiPlainCircle size={5} color="#666666" />
                </div>

                <Menu showMenu={item.showMenu}>
                  <button type="button" onClick={handlePreview}>
                    <MdRemoveRedEye size={15} color="#8E5BE8" /> Visualizar
                  </button>
                  <button type="button">
                    <MdEdit size={15} color="#4D85EE" /> Editar
                  </button>
                  <button type="button">
                    <MdDeleteForever size={15} color="#DE3B3B" /> Excluir
                  </button>
                </Menu>
              </li>
            </ul>
          ))}
        </TBody>
      </Table>

      <Modal showModal={showModal}>
        <div>
          <div>
            <h3>Informações da encomenda</h3>

            <span>Rua Beethoven, 1729</span>
            <span>Diadema - SP</span>
            <span>09960-580</span>
          </div>

          <div>
            <h3>Datas</h3>
            <strong>
              Retirada: <span>25/01/2020</span>
            </strong>
            <strong>
              Entrega: <span>25/01/2020</span>
            </strong>
          </div>

          <div>
            <h3>Assinatura do destinatário</h3>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Assinatura_Jos%C3%A9_Saramago.png"
                alt="Assinatura"
              />
            </div>
          </div>
        </div>
      </Modal>
    </Wrapper>
  );
}
