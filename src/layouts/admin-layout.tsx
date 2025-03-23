import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '@components/Footer/footer';
import AdminNavigationBar from '@components/Navbar/admin-navbar';

const AdminLayout: React.FC = () => {

  return (
    <Layout>
      <AdminNavigationBar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Layout>
  );
};

export default AdminLayout;

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  margin-top: 70px;
`;
