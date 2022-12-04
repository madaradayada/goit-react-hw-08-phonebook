import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getUserName } from 'redux/selector';
import { logOut } from 'redux/operations';

import { MenuWrapper, MenuButton, UserName } from './UserMenuStyled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const handleClick = e => {
    dispatch(logOut());
  };

  return (
    <MenuWrapper>
      <NavLink to ='/contacts'>Contacts</NavLink>
      <UserName>{name}</UserName>
      <MenuButton type="button" onClick={handleClick}>
        Logout
      </MenuButton>
    </MenuWrapper>
  );
};