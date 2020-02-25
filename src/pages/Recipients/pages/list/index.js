import React, { useState } from 'react';
import { GiPlainCircle } from 'react-icons/gi';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import Button from '~/components/BtnRegister';
import DropDown from '~/components/Dropdown';
import Search from '~/components/Search';
import Table from '~/components/Table';
import TBody from '~/components/TableBody';
import THead from '~/components/TableHead';
import Title from '~/components/Title';

import { Wrapper, Header } from './styles';

const userDefault = [
  {
    id: '01',
    name: 'Ludwig van Beethoven',
    endereco: 'Rua Beethoven, 1729, Diadema - São Paulo',
    showMenu: false,
  },
  {
    id: '02',
    name: 'Wolfgang Amadeus',
    endereco: 'Rua Beethoven, 1729, Diadema - São Paulo',
    showMenu: false,
  },
  {
    id: '03',
    name: 'Johann Sebastian Bach',
    endereco: 'Rua Beethoven, 1729, Diadema - São Paulo',
    showMenu: false,
  },
  {
    id: '04',
    name: 'Frédéric Chopin',
    endereco: 'Rua Beethoven, 1729, Diadema - São Paulo',
    showMenu: false,
  },
  {
    id: '05',
    name: 'Piotr Ilitch Tchaikovski',
    endereco: 'Rua Beethoven, 1729, Diadema - São Paulo',
    showMenu: false,
  },
  {
    id: '06',
    name: 'Antonio Vivaldi',
    endereco: 'Rua Beethoven, 1729, Diadema - São Paulo',
    showMenu: false,
  },
];

export default function List() {
  const [recipients, setRecipients] = useState(userDefault);

  function handleMenu(id) {
    const newBbj = recipients.map(item => {
      if (item.id === id) {
        item.showMenu = !item.showMenu;
      } else {
        item.showMenu = false;
      }
      return item;
    });

    setRecipients(newBbj);
  }

  return (
    <Wrapper>
      <Title title="Gerenciando destinatários" />

      <Header>
        <Search titleSearch="destinatários" />
        <Button url="add" />
      </Header>

      <Table>
        <>
          <THead>
            <>
              <li>ID</li>
              <li>Nome</li>
              <li>Endereço</li>
              <li>Ações</li>
            </>
          </THead>

          <TBody>
            <>
              {recipients.map(recipient => (
                <ul key={recipient.id}>
                  <li>#{recipient.id}</li>
                  <li>{recipient.name}</li>
                  <li>{recipient.endereco}</li>
                  <li>
                    <div
                      className="actions"
                      onClick={() => handleMenu(recipient.id)}
                    >
                      <GiPlainCircle size={5} color="#666666" />
                      <GiPlainCircle size={5} color="#666666" />
                      <GiPlainCircle size={5} color="#666666" />
                    </div>

                    <DropDown showMenu={recipient.showMenu}>
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
