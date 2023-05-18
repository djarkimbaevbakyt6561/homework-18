import styled from 'styled-components';
const MaterialMain = ({ title }) => {
  return (
    <Container>
      <TitleContainer>
        <h2>{title}</h2>
      </TitleContainer>
    </Container>
  );
};
export default MaterialMain;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.state ? '80%' : '100%')};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 94%;
  background-color: #96bca0;
  height: 37vh;
  h2 {
    margin-left: 20px;
    font-size: 42px;
    font-weight: 400;
  }
`;
