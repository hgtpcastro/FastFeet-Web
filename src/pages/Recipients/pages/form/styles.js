import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  > div {
    width: 100%;
    height: 100%;
    margin-bottom: 34px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a,
    button {
      width: 112px;
      height: 36px;
      border-radius: 4px;
      color: #fff;
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 900;
      padding: 9px 0;
      & > div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        & > div.icon {
          margin-right: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    a {
      background: #cccccc;
      margin-right: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.1, '#cccccc')};
      }
    }
    button {
      background: #7d40e7;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.05, '#7d40e7')};
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 220px;
  background: #fff;
  border-radius: 4px;
  padding: 32px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 909px;
    display: flex;
    flex-direction: column;
    div {
      margin-bottom: 9px;
      &:last-child {
        margin-bottom: 0;
      }
      &.three {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        div.street {
          width: 518px;
        }
        div.number {
          width: 150px;
        }
        div.complement {
          width: 140px;
        }
        div.city,
        div.state,
        div.cep {
          width: 270px;
        }
      }
    }
    label {
      color: #444444;
      font-size: 1rem;
      font-weight: 900;
      margin-bottom: 9px;
      display: block;
    }
    input {
      width: 100%;
      height: 45px;
      background: #fff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      padding: 12px 15px;
      font-size: 1.143rem;
      &::placeholder {
        color: #999999;
      }
      &:focus {
        border: 1px solid #7d40e7;
      }
    }
  }
`;
