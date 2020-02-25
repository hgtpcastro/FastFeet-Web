import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  > div {
    grid-template-columns: 80px 2fr 4fr 0fr;
  }
`;

export const Header = styled.div`
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
