import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../header/Header';
const Courses = ({ header, url }) => {
  return (
    <TotalContainer>
      <Header header={header} url={url} />
      <Outlet/>
    </TotalContainer>
  );
};
export default Courses;

const TotalContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
`;

