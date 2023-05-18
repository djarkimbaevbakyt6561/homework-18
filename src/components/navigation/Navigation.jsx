import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
  const navLink = [
    {
      title: 'Courses',
      url: '/courses',
    },
    {
      title: 'Anouncements',
      url: '/anouncements',
    },
    {
      title: 'Notifications',
      url: '/notifications',
    },
    {
      title: 'Shedule',
      url: '/shedule',
    },
  ];
  return (
    <Container>
      <NavHeader>
        <p>LOGO</p>
        <NavList>
          {navLink.map((el) => {
            return (
              <NavLink
                to={el.url}
                style={({ isActive }) => {
                  return {
                    color: isActive ? '#202020' : '#00a2ff',
                    fontSize: '42px',
                    width: '89.7%',
                    textDecoration: 'none',
                    display: 'flex',
                    padding: '5px 0px 10px 40px',
                    background: isActive ? '#e0b5e6' : 'white',
                  };
                }}
              >
                {el.title}
              </NavLink>
            );
          })}
        </NavList>
      </NavHeader>
      <Outlet />
    </Container>
  );
};
export default Navigation;
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const NavHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #d6d6d6;
  width: 20%;
  height: 100vh;
  p {
    color: #8227ba;
    margin: 40px 0px 150px 70px;
    font-size: 42px;
    font-weight: 700;
  }
`;
const NavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #00a2ff;
  background-color: white;
  width: 100%;
`;
