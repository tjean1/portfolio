import { Link } from 'react-router-dom';
import { HomeLogo, NavContainer } from '../styles';
import Logo from '../styles/assets/logo.svg';
import Burger from './Burger';

function Navbar() {
    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={Logo} />
            </Link>
            <Burger />
        </NavContainer>
    );
}

export default Navbar;
