import React, { useState, useEffect } from 'react';
import { GiPlainCircle } from 'react-icons/gi';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import DropDown from '~/components/Dropdown';
import Table from '~/components/Table';
import TBody from '~/components/TableBody';
import THead from '~/components/TableHead';
import Title from '~/components/Title';

import { Wrapper, Modal } from './styles';

const userDefault = [
  {
    id: '01',
    problema:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in mauris et felis eleifend elementum vel quis lectus…',
    showMenu: false,
  },
  {
    id: '02',
    problema: 'Destinatário ausente',
    showMenu: false,
  },
  {
    id: '03',
    problema: 'Carga roubada',
    showMenu: false,
  },
  {
    id: '04',
    problema: 'Destinatário ausente',
    showMenu: false,
  },
  {
    id: '05',
    problema: 'Infelizmente sofri um acidente que danificou a encomenda',
    showMenu: false,
  },
  {
    id: '06',
    problema: 'Destinatário ausente',
    showMenu: false,
  },
];

export default function List() {
  const [problems, setProblems] = useState(userDefault);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.onclick = ({ target }) => {
      if (showModal && target.id === 'modal') {
        setShowModal(false);
      }
    };
  }, [showModal]);

  function handleMenu(id) {
    const newBbj = problems.map(item => {
      if (item.id === id) {
        item.showMenu = !item.showMenu;
      } else {
        item.showMenu = false;
      }
      return item;
    });

    setProblems(newBbj);
  }

  function handlePreview() {
    setProblems(
      problems.map(item => {
        item.showMenu = false;
        return item;
      })
    );
    setShowModal(!showModal);
  }

  return (
    <Wrapper>
      <Title title="Gerenciando destinatários" />

      <Table>
        <>
          <THead>
            <>
              <li>Encomenda</li>
              <li>Problema</li>
              <li>Ações</li>
            </>
          </THead>

          <TBody>
            <>
              {problems.map(problem => (
                <ul key={problem.id}>
                  <li>#{problem.id}</li>
                  <li>{problem.problema}</li>
                  <li>
                    <div
                      className="actions"
                      onClick={() => handleMenu(problem.id)}
                    >
                      <GiPlainCircle size={5} color="#666666" />
                      <GiPlainCircle size={5} color="#666666" />
                      <GiPlainCircle size={5} color="#666666" />
                    </div>

                    <DropDown showMenu={problem.showMenu} isLarge>
                      <>
                        <button type="button" onClick={handlePreview}>
                          <MdEdit size={15} color="#4D85EE" />
                          Visualizar
                        </button>
                        <button type="button">
                          <MdDeleteForever size={15} color="#DE3B3B" />
                          Cancelar encomenda
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

      <Modal showModal={showModal}>
        <div>
          <h3>VIZUALIZAR PROBLEMA</h3>

          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            mauris et felis eleifend elementum vel quis lectus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec in mauris et
            felis eleifend elementum vel quis lectus. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Donec in mauris et felis eleifend
            elementum vel quis lectus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec in mauris et felis eleifend elementum vel
            quis lectus.
          </span>
        </div>
      </Modal>
    </Wrapper>
  );
}
