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

const Students = () => {
  return (
    <Container>
      {students.map((el) => {
        return (
          <Student>
            <Desctiption>
              <Title>{el.title}</Title>
              <Title>{el.id}</Title>
            </Desctiption>
            <div>
            <Button linkOn={true} url={`${el.id}/details`}>
              Details
            </Button>
            </div>
          
          </Student>
        );
      })}
    </Container>
  );
};
export default Students;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 40px;
  width: 99%;
  margin-left: 46px;
`;
const Title = styled.p`
  font-size: 42px;
  margin: 0;
  color: black;
  margin-left: 20px;
`;
const Desctiption = styled.div`
  display: flex;
  margin-left: 50px;
`;
const Student = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  height: 150px;
  width: 94%;
  text-decoration: none;
  margin-top: 30px;
  div {
    margin-right: 60px;
  }
`;
