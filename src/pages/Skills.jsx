import React from 'react';
import { SkillsContainer, SkillsListing, SquaredTitle, Tools } from '../styles';
import Skill from '../components/Skill';

const backTechnologies = [
    'JavaScript',
    'Node.js',
    'Express.js',
    'Python',
    'Rust',
    'MongoDB',
    'MySQL',
];

const frontTechnologies = [
    'ReactJS',
    'Redux',
    'React Native',
    'Sass',
    'Bootstrap',
];

const blockchainTechnologies = [
    'Blockchain',
    'Ethereum',
    'Solidity',
    'Web3.js',
    'Polkadot',
    'Polkadot.js',
    'Substrate',
];

const services = [
    'Git',
    'Amazon EC2',
    'Docker',
    'Kubernetes',
    'Ansible',
    'ELK',
    'PM2',
];

const tools = ['VSCode', 'npm', 'Postman', 'Jest', 'Jenkins', 'Trello', 'Jira'];

const allBackTechnologies = backTechnologies.map((tech) => (
    <Skill name={tech} key={tech} />
));

const allFrontTechnologies = frontTechnologies.map((secondaryTechnology) => (
    <Skill name={secondaryTechnology} key={secondaryTechnology} />
));

const allBlockchainTechnologies = blockchainTechnologies.map(
    (blockchainTechnology) => (
        <Skill name={blockchainTechnology} key={blockchainTechnology} />
    )
);

const allServices = services.map((service) => (
    <Skill name={service} key={service} />
));

const allTools = tools.map((tool) => <Skill name={tool} key={tool} />);

function Skills() {
    return (
        <SkillsContainer>
            <SkillsListing
                style={{
                    '--degree': '180deg',
                }}
            >
                <SquaredTitle>
                    <h4>Stack Back-end :</h4>
                </SquaredTitle>
                <Tools>{allBackTechnologies}</Tools>
            </SkillsListing>

            <SkillsListing
                style={{
                    '--degree': '180deg',
                }}
            >
                <SquaredTitle>
                    <h4>Technologies Web 3.0 :</h4>
                </SquaredTitle>
                <Tools>{allBlockchainTechnologies}</Tools>
            </SkillsListing>

            <SkillsListing
                style={{
                    '--degree': '180deg',
                }}
            >
                <SquaredTitle>
                    <h4>Autres technologies et outils front/mobile :</h4>
                </SquaredTitle>
                <Tools>{allFrontTechnologies}</Tools>
            </SkillsListing>

            <SkillsListing
                style={{
                    '--degree': '180deg',
                }}
            >
                <SquaredTitle>
                    <h4>Infrastructures et services :</h4>
                </SquaredTitle>
                <Tools>{allServices}</Tools>
            </SkillsListing>

            <SkillsListing
                style={{
                    '--degree': '180deg',
                }}
            >
                <SquaredTitle>
                    <h4>Environnement, tests et gestion :</h4>
                </SquaredTitle>
                <Tools>{allTools}</Tools>
            </SkillsListing>
        </SkillsContainer>
    );
}

export default Skills;
