import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../UI/Button';
const students = [
  {
    title: 'Antolio Suparuchi',
    id: '1',
  },
  {
    title: 'Muhammed Ali',
    id: '2',
  },
];

const StudentDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  function goBackHandler() {
    navigate(-1);
  }
  const findedProducts = students.find((el) => el.id === params.studentId);
  return (
    <Container>
      <Desctiption>
        <p>Student Details Page</p>
        <p>
          {findedProducts.title} {findedProducts.id}
        </p>
        <Button onClick={goBackHandler} buttonState={true}>
          Go back
        </Button>
      </Desctiption>
    </Container>
  );
};
export default StudentDetail;
const Container = styled.div`
  display: flex;
  width: 94%;
  background-color: white;
  margin-top: 40px;
  height: 75vh;
`;
const Desctiption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
  margin-left: 20px;
  p {
    margin: 0;
    width: 800px;
    text-align: left;
    font-size: 42px;
    margin-bottom: 20px;
  }
`;
