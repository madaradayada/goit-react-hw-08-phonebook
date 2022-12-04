import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex; 
`;

export const Item = styled.li`
  margin-right: 20px; 
  &:last-child {
    margin-right: 5px;
  }
`;

export const Link = styled(NavLink)`
  color: rgb(255, 255, 255);   
  &.active {
    color: #0000FF;
  }
`;