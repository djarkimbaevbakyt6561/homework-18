import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../UI/Button';
import MaterialForm from './MaterialForm';

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

const Materials = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  function openModal() {
    searchParams.set('modal', 'addNewMaterial');
    setSearchParams(searchParams);
  }
  function closeModal() {
    searchParams.delete('modal');
    setSearchParams(searchParams);
  }
  return (
    <Container>
      {searchParams.has('modal') && <MaterialForm onClick={closeModal} />}
      <AddButton onClick={openModal}>Add new material</AddButton>
      {materials.map((el) => {
        return (
          <Material>
            <Desctiption>
              <Title>{el.title}</Title>
              <Title>{el.id}</Title>
            </Desctiption>
            <div>
              <Button linkOn={true} url={`${el.id}/details`}>
                Details
              </Button>
            </div>
          </Material>
        );
      })}
    </Container>
  );
};
export default Materials;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 40px;
  width: 94%;
  margin-right: 30px;
`;
const AddButton = styled.button`
  color: white;
  background: #eb9240;
  border: none;
  font-weight: 500;
  font-size: 42px;
  border-radius: 50px;
  width: 400px;
  height: 70px;
  margin-top: 30px;
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
const Material = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  height: 150px;
  width: 100%;
  text-decoration: none;
  margin-top: 30px;
  div {
    margin-right: 60px;
  }
`;
