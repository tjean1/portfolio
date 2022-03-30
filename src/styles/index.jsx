import { Link } from 'react-router-dom';
import colors from './colors';
import styled from 'styled-components';

/**
 * HOME
 */

export const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const HomeContainer = styled.div`
    margin: 30px;
    background-color: ${colors.backgroundLight};
    padding: 60px 90px;
    display: flex;
    flex-direction: row;
    max-width: 1200px;
`;

export const About = styled.div`
    position: relative;
    h1 {
        margin-bottom: 20px;
    }
    p {
        max-width: 620px;
        word-break: break-word;
        font-size: 1em;
        margin-top: 30px;
        margin-bottom: 5px;
        text-align: justify;
    }
`;

export const Github = styled.div`
    position: flex;
    img {
        width: 25px;
        height: 25px;
    }
`;

export const Avatar = styled.div`
    > * {
        position: absolute;
        z-index: 1;
        top: 0;
        right: 80px;
    }
    img {
        width: 58px;
        height: 78px;
        @media (max-width: 600px) {
            position: absolute;
            z-index: 1;
            width: 38px;
            height: 48px;
            left: 150px;
            top: 80px;
        }
        @media (min-width: 601px) and (max-width: 695px) {
            position: absolute;
            top: 80px;
            left: 180px;
        }
        @media (min-width: 696px) and (max-width: 860px) {
            position: absolute;
            left: 470px;
        }
    }
`;

/**
 * NAVBAR
 */

export const HomeLogo = styled.img`
    display: flex;
    align-items: center;
    height: 20px;
    width: 20px;
    opacity: 1;
    transition: 0.3s ease-in-out;
    &:hover {
        opacity: 0.5;
    }
`;

export const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.white};
`;

/**
 * RIGHT NAV
 */

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    z-index: 2;
    li {
        padding: 18px 10px;
    }
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: ${colors.backgroundDark};
        position: fixed;
        transform: ${({ open }) =>
            open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 200px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
    }
`;

export const StyledLink = styled(Link)`
    padding: 10px 15px;
    color: ${colors.darkMenu};
    text-decoration: none;
    font-size: 18px;
    text-align: center;
    &:hover {
        border-left: thick solid black;
        font-weight: 900;
    }
    @media (max-width: 768px) {
        background-image: none;
        color: ${colors.backgroundGrey};
    }
`;

/**
 * BURGER
 */

export const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 4;
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => (open ? '#ccc' : '#333')};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }
        &:nth-child(2) {
            transform: ${({ open }) =>
                open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => (open ? 0 : 1)};
        }
        &:nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`;

/**
 * SKILL
 */

export const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 24px;
    transition: opacity 0.4s;
    @media only screen and (max-width: 1010px) {
        margin-bottom: 24px;
    }
    img {
        height: 64px;
        width: 64px;
    }
    span {
        margin-top: 4px;
        font-weight: 600;
        font-size: 0.9rem;
    }
`;

/**
 * SKILLS
 */

export const SkillsContainer = styled.div`
    h4 {
        font-size: 1rem;
    }
    @media only screen and (min-width: 1200px) {
            width: 1000px;
            margin: 120px auto;
        }
    }
    @media only screen and (max-width: 1199px) {
            width: auto;
            padding: 0 24px;
            margin: 90px 0;
    }
    @media only screen and (max-width: 700px) {
            width: auto;
            padding: 0 24px;
            margin: 64px 0;
    }
`;

export const SkillsListing = styled.div`
    background-color: ${colors.backgroundLight};
    background: linear-gradient(
        var(--degree),
        ${colors.white} 0%,
        ${colors.backgroundLight} 80%
    );
    padding: 48px;
    margin-bottom: 48px;
`;

export const SquaredTitle = styled.div`
    padding-left: 20px;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        left: 0;
        background-color: ${colors.backgroundDark};
        height: 100%;
        width: 10px;
    }
`;

export const Tools = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 48px;
    &:hover {
        ${SkillContainer}:not(:hover) {
            opacity: 0.7;
        }
    }
}
`;

/**
 * FOOTER
 */

export const FooterContainer = styled.div`
    background-color: #000000;
    color: ${colors.white};
    padding-bottom: 30px;
    margin: 64px auto 0 auto;
    p img {
        margin: 0 8px;
        width: auto;
    }
    span {
        font-size: 15px;
    }
    @media only screen and (min-width: 700px) {
        width: auto;
    }
    @media only screen and (max-width: 600px) {
        padding: 0 16px;
        h2 {
            width: 100%;
            font-size: 4px;
        }
    }
`;

export const FooterBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    span {
        @media (max-width: 768px) {
            font-size: 80%;
            padding-bottom: 20px;
        }
    }
`;

export const CodeSnippet = styled.div`
    width: 200px;
    background-color: dark;
    font-size: 15px;
`;

export const CodeSection = styled.div`
    position: relative;
    width: 100%;
    left: 20px;
    span {
        position: absolute;
        right: 205px;
        top: 10%;
        bottom: 0;
        &:hover {
            cursor: pointer;
        }
    }
    @media (max-width: 768px) {
        font-size: 90%;
    }
`;

export const TooltipBox = styled.div`
    font-size: 10px;
    visibility: hidden;
    width: 100px;
    left: 200px;
    background-color: white;
    color: black;
    text-align: center;
    border-radius: 6px;
`;

export const TooltipCard = styled.div`
    & ${CodeSection}:hover + ${TooltipBox} {
        visibility: visible;
    }
`;
