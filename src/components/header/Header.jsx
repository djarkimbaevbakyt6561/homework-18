import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const Header = ({ header, materialState, url }) => {
  return (
    <>
      <Container state={materialState}>
        <NavList state={materialState}>
          {header.map((el) => {
            return (
              <NavLink
                to={`${url}${el.url}`}
                style={({ isActive }) => {
                  return {
                    color: isActive ? '#202020' : 'white',
                    borderBottom: isActive ? '9px solid #ffb300' : 'none',
                    textDecoration: 'none',
                    fontSize: '42px',
                    fontWeight: '700',
                    marginLeft: '30px',
                    height:"58px"
                  };
                }}
              >
                {el.title}
              </NavLink>
            );
          })}
        </NavList>
      </Container>
    </>
  );
};
export default Header;
const Container = styled.div`
  font-weight: 500;
  width: ${(props) => (props.state ? '94%' : '100%')};
  height: ${(props) => (props.state ? '80px' : '160px')};
  display: flex;
  justify-content: space-between;
  background: ${(props) => (props.state ? '#018e7e' : '#3399ff')};
  color: white;
  font-size: 32px;
`;
const NavList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 680px;
  margin-top: ${(props) => (props.state ? '5px' : '30px')};
`;
