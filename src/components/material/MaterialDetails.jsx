import { Outlet, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../header/Header';
import Button from '../UI/Button';
const materials = [
  {
    title: 'Material',
    id: '1',
  },
  {
    title: 'Material',
    id: '2',
  },
];

const MaterialDetail = ({ header, url }) => {
  const params = useParams();
  const navigate = useNavigate();
  function goBackHandler() {
    navigate(-1);
  }
  const findedProducts = materials.find((el) => el.id === params.materialId);
  return (
    <>
      <Container>
        <Desctiption>
          <p>Material Details Page</p>
          <p>
            {findedProducts.title} {findedProducts.id}
          </p>
          <Button onClick={goBackHandler} buttonState={true}>
            Go back
          </Button>
        </Desctiption>
      </Container>
      <Header
        url={`/courses/materials/${params.materialId}/details`}
        materialState={true}
        header={header}
      ></Header>
      <Outlet />
    </>
  );
};
export default MaterialDetail;
const Container = styled.div`
  display: flex;
  width: 94%;
  background-color: white;
  margin-top: 40px;
  height: 34vh;
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
