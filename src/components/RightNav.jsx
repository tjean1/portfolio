import React from 'react';
import { Ul, StyledLink } from '../styles';

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/skills">Compétences</StyledLink>
        </Ul>
    );
};

export default RightNav;
