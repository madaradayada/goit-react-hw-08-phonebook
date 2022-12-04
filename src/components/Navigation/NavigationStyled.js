import styled from 'styled-components';

export const List = styled.ul`
  display: flex; 
`;

export const Item = styled.li`
  margin-right: 20px; 
  &:last-child {
    margin-right: 5px;
  }
`;