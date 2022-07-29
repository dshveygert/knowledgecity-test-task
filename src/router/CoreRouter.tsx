import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import LoginPage from '../pages/LoginPage/LoginPage';
import RequireAuth from './RequireAuth/RequireAuth';
import AuthProvider from './auth/AuthProvider/AuthProvider';
import RequireAuthRouter from './RequireAuthRouter';
export default function CoreRouter() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route
            path='/*'
            element={
              <RequireAuth>
                <RequireAuthRouter />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
