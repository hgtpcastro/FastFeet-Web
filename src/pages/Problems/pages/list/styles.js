import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  > div {
    grid-template-columns: 1fr 5fr 0fr;
  }
`;

export const Modal = styled.div.attrs({
  id: 'modal',
})`
  display: ${props => (props.showModal ? 'flex' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;

  > div {
    width: 450px;
    height: 353px;
    background: #ffffff;
    padding: 25px;
    box-shadow: 0px 0px 10px #00000033;
    border-radius: 4px;

    h3 {
      color: #444444;
      font-size: 1rem;
      font-weight: 900;
      margin-bottom: 4px;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      color: #666666;
      font-weight: 300;
      font-size: 1.143rem;
      margin-top: 5px;
    }
  }
`;
