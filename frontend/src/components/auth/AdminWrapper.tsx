import { Outlet } from 'react-router';
import { ProtectedRoute } from './ProtectedRoute';

export const AdminWrapper = () => (
  <ProtectedRoute>
    <Outlet />
  </ProtectedRoute>
);

export default AdminWrapper;
