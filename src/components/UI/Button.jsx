import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = ({ onClick, children, buttonState, linkOn, url }) => {
  return (
    <>
      {buttonState && <ButtonGoBack onClick={onClick}>{children}</ButtonGoBack>}
      {linkOn && (
        <Link
          style={{
            color: '#202020',
            padding: '25px 105px',
            background: '#019c9c',
            border: 'none',
            fontWeight: "500",
            fontSize: "30px",
            borderRadius: "50px",
            textDecoration: "none"
          }}
          to={url}
        >
          Details
        </Link>
      )}
    </>
  );
};
export default Button;
const ButtonGoBack = styled.button`
  color: #202020;
  padding: 25px 105px;
  background: #019c9c;
  border: none;
  font-weight: 500;
  font-size: 30px;
  border-radius: 50px;
`;
