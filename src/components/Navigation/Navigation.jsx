import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selector';
import { List, Item } from './NavigationStyled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <List>
        <Item>
          <NavLink to='/' end>Home</NavLink>
        </Item>
        {!isLoggedIn && ( 
          <>     
        <Item>
          <NavLink to='/register'>Registration</NavLink>
        </Item>
        <Item>
          <NavLink to='/login'>Login</NavLink>
        </Item>
          </> 
        )} 
      </List>
    </>
  );
};