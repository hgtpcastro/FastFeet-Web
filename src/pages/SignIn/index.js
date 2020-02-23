import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '~/assets/fastfeet.svg';
import Input from '~/components/Input';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('O password é obrigatória'),
});

export default function SignIn() {
  const formRef = useRef(null);

  const loading = false;

  function handleSubmit({ email, password }) {}

  return (
    <>
      <img src={logo} alt="Firstpharma" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          label="Seu e-mail"
          placeholder="exemplo@email.com"
        />
        <Input
          name="password"
          type="password"
          label="Seu password"
          placeholder="********"
        />

        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
