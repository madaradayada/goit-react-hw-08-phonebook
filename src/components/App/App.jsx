import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getIsRefreshing } from 'redux/selector';
import { refreshUser } from 'redux/operations';

import { Layout } from 'components/Layout';
import { AppBar } from 'components/AppBar/AppBar';

import { Wrapper, Footer } from './AppStyled';
import { ThemeProvider } from '@mui/material';
import { theme } from 'shared/theme';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <ThemeProvider theme={theme}>
        <AppBar />
        <Wrapper>
          <Layout />
        </Wrapper>
        <Footer>
        <p> &copy; 2022 Oleksandr Mytrofanov. All rights reserved</p>
      </Footer>
      </ThemeProvider>
    )
  );
};
 
 