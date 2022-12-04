import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

import { Container } from 'components/App/AppStyled';
import { HomePage } from './pages/HomePage/HomePage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { LoginPage } from './pages/LoginPage/LoginPage';

export const Layout = () => {
  return (
    <Suspense fallback={<p>...Load page</p>}>
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={
            <PrivateRoute 
            redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="/register" element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
              restricted
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<LoginPage />}
              restricted
            />
          }
        />
        <Route path="*" element={<p>Sorry, something went wrong</p>}></Route>
      </Routes>
      </Container>
    </Suspense>
  );
};