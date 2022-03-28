import React from 'react';
import { Ul, StyledLink } from '../styles';

const RightNav = ({ open, setOpen }) => {
    return (
        <Ul open={open} onClick={() => setOpen(!open)}>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/skills">Compétences</StyledLink>
        </Ul>
    );
};

export default RightNav;
