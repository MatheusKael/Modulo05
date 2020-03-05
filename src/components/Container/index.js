import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  padding: 30px;
  margin: 80px auto;
  h1 {
    font-size: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export default Container;
