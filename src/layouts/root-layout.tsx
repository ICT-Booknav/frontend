import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '@components/Footer/footer';
import NavigationBar from '@components/Navbar/navbar';

const RootLayout: React.FC = () => {

  return (
    <Layout>
      <NavigationBar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Layout>
  );
};

export default RootLayout;

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  margin-top: 70px;
`;
