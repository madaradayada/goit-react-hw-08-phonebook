import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 8px 0; 
  background: linear-gradient(90deg, #cfecd0, #ffc5ca);
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
  
}
`;

export const Logo = styled.span`
  margin-left: 5px;
  font-size: 40px;
  font-weight: 700;
  color: #0000FF;
`;
export const HeaderWrapper = styled.div`
  display: flex;
    gap: 10px;
`;