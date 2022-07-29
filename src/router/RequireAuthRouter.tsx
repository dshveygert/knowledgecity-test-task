import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserListPage from '../pages/UserListPage/UserListPage';
export default function RequireAuthRouter() {
  return (
    <Routes>
      <Route index element={<UserListPage />} />
    </Routes>
  );
}
