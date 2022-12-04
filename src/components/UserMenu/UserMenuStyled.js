import styled from 'styled-components';

export const MenuWrapper = styled.div`  
  display: flex;
  gap: 10px;
  color: #0000FF;
  text-align: right;
  &:last-child {
    margin-right: 10px;
  }
`;

export const MenuButton = styled.button`
display: block;
width: 80px;
font-size: 8px;
text-decoration: none;
display: inline-block;
color: white;
padding: 5px 10px;
border-radius: 10px;
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
letter-spacing: 2px;
background-image: linear-gradient(
  to right,
  #9eefe1 0%,
  #4830f0 51%,
  #9eefe1 100%
);
background-size: 200% auto;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
transition: 0.5s;
&:hover {
  background-position: right center;
}
`;

export const UserName = styled.p`
  font-size: 16px;
  color: #0000FF;
`;