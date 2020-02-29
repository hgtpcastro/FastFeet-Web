import React, { useState, useEffect, useCallback } from 'react';
import { MdAdd, MdCheck } from 'react-icons/md';

import NoResults from '~/components/NoResults';
import { ButtonNavigation } from '~/components/UIElements/Buttons';
import HeaderList from '~/components/UIElements/Headers/List';
import { InputSearch } from '~/components/UIElements/Inputs';
import api from '~/services/api';

import RecipientItem from '../RecipientItem';
import { Container, Content, Grid, Button } from './styles';

export default function Recipients() {
  const [page, setPage] = useState(1);
  const [recipients, setRecipients] = useState([]);

  const loadRecipients = useCallback(async () => {
    const response = await api.get('/recipient', {
      params: {
        page,
      },
    });

    setRecipients(response.data);
  }, [page]);

  async function handleSearchRecipient(e) {
    setPage(1);

    const response = await api.get('/recipient', {
      params: {
        page,
        q: e.target.value,
      },
    });

    setRecipients(response.data);
  }

  useEffect(() => {
    loadRecipients();
  }, [loadRecipients, page]);

  return (
    <Container>
      <Content>
        <HeaderList title="Gerenciando destinatários">
          <InputSearch
            onChange={handleSearchRecipient}
            type="text"
            placeholder="Buscar por destinatários"
          />
          <ButtonNavigation url="add" Icon={MdAdd} title="Cadastrar" />
        </HeaderList>
        <Grid>
          <section>
            <strong>ID</strong>
            <strong>Nome</strong>
            <strong>Endereço</strong>
            <strong>Ações</strong>
          </section>
          {recipients.length === 0 && <NoResults />}
          {recipients.map(recipient => (
            <RecipientItem
              updateRecipients={loadRecipients}
              key={recipient.id}
              data={recipient}
            />
          ))}
        </Grid>
        <section>
          <Button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            type="button"
          >
            Voltar
          </Button>
          <Button
            disabled={recipients.length < 5}
            type="button"
            onClick={() => setPage(page + 1)}
          >
            Próximo
          </Button>
        </section>
      </Content>
    </Container>
  );
}
