import React from 'react';
import { SkillsContainer, SkillsListing, SquaredTitle, Tools } from '../styles';
import Skill from '../components/Skill';

const technologies = [
    'JavaScript',
    'MongoDB',
    'Express.js',
    'ReactJS',
    'Node.js',
    'React Native',
    'Redux',
];

const secondaryTechnologies = [
    'PHP',
    'MySQL',
    'PostgreSQL',
    'Python',
    'Rust',
    'Sass',
    'Bootstrap',
];

const blockchainTechnologies = [
    'Blockchain',
    'Ethereum',
    'Solidity',
    'Web3.js',
    'Polkadot',
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

const allTechnologies = technologies.map((tech) => (
    <Skill name={tech} key={tech} />
));

const allSecondaryTechnologies = secondaryTechnologies.map(
    (secondaryTechnology) => (
        <Skill name={secondaryTechnology} key={secondaryTechnology} />
    )
);

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
                    <h4>Stack technique :</h4>
                </SquaredTitle>
                <Tools>{allTechnologies}</Tools>
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
                    <h4>Autres langages et outils :</h4>
                </SquaredTitle>
                <Tools>{allSecondaryTechnologies}</Tools>
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
