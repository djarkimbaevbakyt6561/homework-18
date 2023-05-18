import styled from 'styled-components';
import Button from './Button';
const MainComponent = ({ goBackHandler, title, buttonState }) => {
  return (
    <Container state={buttonState}>
      <TitleContainer>
        <h2>{title}</h2>
        <ButtonContainer>
          <Button buttonState={buttonState} onClick={goBackHandler}>
            Go back
          </Button>
        </ButtonContainer>
      </TitleContainer>
    </Container>
  );
};
export default MainComponent;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.state ? '80%' : '100%')};
  margin-top: 30px;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-left: 20px;
  margin-top: 50px;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 96%;
  background-color: white;
  height: ${(props) => (props.state ? '100%' : '77vh')};
  h2 {
    margin-left: 20px;
    font-size: 42px;
    font-weight: 400;
  }
`;
