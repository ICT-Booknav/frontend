import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RoutePaths from './routePaths';
import MainPage from '@pages/landing/LandingPage';
import SearchPage from '@pages/userPage/main/MainPage';
import SearchDetailPage from '@pages/userPage/search_detail/SearchDetailPage';
import BookDetailPage from '@pages/userPage/book_detail/BookDetailPage';
import ChatPage from '@pages/userPage/chat/ChatPage';
import RootLayout from '@layouts/root-layout';
import AdminPage from '@pages/adminPage/AdminPage';
import AdminLayout from '@layouts/admin-layout';
import ErrorPage from '@pages/error/ErrorPage';

// Public Routes (under RootLayout)
const publicRoutes = [
  { path: RoutePaths.SEARCH, element: <SearchPage /> },
  { path: RoutePaths.SEARCH_DETAIL, element: <SearchDetailPage /> },
  { path: RoutePaths.BOOK_DETAIL, element: <BookDetailPage /> },
  { path: RoutePaths.CHAT, element: <ChatPage /> },
];

// Main Router Configuration
const router = createBrowserRouter([
  {
    path: RoutePaths.MAIN, // MainPage는 RootLayout과 분리
    element: <MainPage />,
  },
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [...publicRoutes], // RootLayout의 자식 경로
  },
  {
    path: RoutePaths.ADMIN, // AdminPage는 AdminLayout 사용
    element: <AdminLayout />,
    children: [
      { path: '', element: <AdminPage /> }, // AdminPage 라우트 설정
    ],
  },
]);

// Router Component
const Router: React.FC = () => <RouterProvider router={router} />;

export default Router;
