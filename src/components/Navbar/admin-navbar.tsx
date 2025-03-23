import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import RoutePaths from '@router/routePaths';
import Typography from '@components/Typography/typography';

const AdminNavigationBar: React.FC = () => {
  const handleNavClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Nav>
        <StyledNavLink to={RoutePaths.MAIN} onClick={handleNavClick}>
          Main으로 돌아가기
        </StyledNavLink>
        <Typography variant="titleXxSmall">
          <MenuItems>
            <StyledNavLink to={RoutePaths.ADMIN} onClick={handleNavClick}>
              도서 관리하기
            </StyledNavLink>
          </MenuItems>
        </Typography>
        <Profile />
      </Nav>
    </Container>
  );
};

export default AdminNavigationBar;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 9999;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  margin: 0 auto;
  padding: 0 clamp(20px, 10vw, 60px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

const StyledNavLink = styled(NavLink)<{ isSearch?: boolean }>`
  position: relative;
  color: black;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[3]};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary[6]};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0; /* 통일된 시작 지점 */
    width: ${({ isSearch }) => (isSearch ? '100%' : '100%')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary[6]};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &.active::after {
    transform: scaleX(1);
  }
`

const MenuItems = styled.div`
  display: flex;
  gap: clamp(20px, 10vw, 40px);
`

const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  background: lightgray;
  cursor: pointer;
  margin-left: 50px;
`