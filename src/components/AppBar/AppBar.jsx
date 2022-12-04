import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selector';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Logo, Header, HeaderWrapper} from './AppBarStyled';


export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Header>              
      <Logo>PhoneBook</Logo>
      <HeaderWrapper>
          <Navigation />
          {isLoggedIn && <UserMenu />}
      </HeaderWrapper>
    </Header>
  );
};