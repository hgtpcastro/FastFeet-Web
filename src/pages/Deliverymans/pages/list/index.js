import React, { useState } from 'react';
import { GiPlainCircle } from 'react-icons/gi';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import Button from '~/components/BtnRegister';
import DropDown from '~/components/Dropdown';
import Initials from '~/components/Initials';
import Search from '~/components/Search';
import Table from '~/components/Table';
import TBody from '~/components/TableBody';
import THead from '~/components/TableHead';
import Title from '~/components/Title';

import { Wrapper, Header } from './styles';

const userDefault = [
  {
    id: '01',
    inicial: 'JD',
    name: 'John Doe',
    email: 'example@rocketseat.com',
    showMenu: false,
  },
  {
    id: '02',
    inicial: 'GA',
    name: 'Gaspar Antunes',
    email: 'example@rocketseat.com',
    showMenu: false,
  },
  {
    id: '03',
    inicial: 'DJ',
    name: 'Dai Jiang',
    email: 'example@rocketseat.com',
    showMenu: false,
  },
  {
    id: '04',
    inicial: 'TH',
    name: 'Tom Hanson',
    email: 'example@rocketseat.com',
    showMenu: false,
  },
  {
    id: '05',
    inicial: 'MF',
    name: 'Marc Franklin',
    email: 'example@rocketseat.com',
    showMenu: false,
  },
  {
    id: '06',
    inicial: 'RC',
    name: 'Rosetta Castro',
    email: 'example@rocketseat.com',
    showMenu: false,
  },
];

export default function List() {
  const [deliverysMan, setDeliverysMan] = useState(userDefault);

  function handleMenu(id) {
    const newBbj = deliverysMan.map(item => {
      if (item.id === id) {
        item.showMenu = !item.showMenu;
      } else {
        item.showMenu = false;
      }
      return item;
    });

    setDeliverysMan(newBbj);
  }

  return (
    <Wrapper>
      <Title title="Gerenciando entregadores" />

      <Header>
        <Search titleSearch="entregadores" />
        <Button url="add" />
      </Header>

      <Table>
        <>
          <THead>
            <>
              <li>ID</li>
              <li>Foto</li>
              <li>Nome</li>
              <li>Email</li>
              <li>Ações</li>
            </>
          </THead>

          <TBody>
            <>
              {deliverysMan.map(delivery => (
                <ul key={delivery.id}>
                  <li>#{delivery.id}</li>
                  <li>
                    <Initials initial={delivery.inicial} />
                  </li>
                  <li>{delivery.name}</li>
                  <li>{delivery.email}</li>
                  <li>
                    <div
                      className="actions"
                      onClick={() => handleMenu(delivery.id)}
                    >
                      <GiPlainCircle size={5} color="#666666" />
                      <GiPlainCircle size={5} color="#666666" />
                      <GiPlainCircle size={5} color="#666666" />
                    </div>

                    <DropDown showMenu={delivery.showMenu}>
                      <>
                        <button type="button">
                          <MdEdit size={15} color="#4D85EE" /> Editar
                        </button>
                        <button type="button">
                          <MdDeleteForever size={15} color="#DE3B3B" /> Excluir
                        </button>
                      </>
                    </DropDown>
                  </li>
                </ul>
              ))}
            </>
          </TBody>
        </>
      </Table>
    </Wrapper>
  );
}
