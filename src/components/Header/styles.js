import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 35px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      margin-right: 10px;
      font-weight: bold;

      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;

      font-size: 15px;
      display: inline-block;
      position: relative;
      overflow: hidden;
      text-decoration: none;
      text-transform: uppercase;

      &.active {
        color: ${props => (props.active ? '#444444' : '#999999')};
        cursor: default;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #444444;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;
