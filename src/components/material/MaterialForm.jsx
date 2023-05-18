import styled from 'styled-components';
import Button from '../UI/Button';
const MaterialForm = ({onClick}) => {
  return (
    <Wrapper>
      <Container>
        <p>Add new material modal</p>
        <Button buttonState={true} onClick={onClick}>Close modal</Button>
      </Container>
    </Wrapper>
  );
};
export default MaterialForm;
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`;
const Container = styled.div`
    background-color: #daafbe;
    p {
        font-size: 42px;
    }
    width: 1000px;
    height: 500px;
`