import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #7d40e7;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;
  max-width: 390px;
  max-height: 430px;
  background: #fff;
  border-radius: 4px;

  img {
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      border: 1px solid #dddddd;
      border-radius: 4px;
      height: 44px;
      width: 330px;
      padding: 15px;
      color: #fff;
      margin: 0 0 10px;
    }

    label {
      display: block;
      align-self: flex-start;
      font-weight: bold;
      margin-left: 30px;
      margin-bottom: 5px;
      margin-top: 15px;
      text-transform: uppercase;
    }

    span {
      color: #c62828;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      width: 330px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7D40E7')};
      }
    }
  }
`;
