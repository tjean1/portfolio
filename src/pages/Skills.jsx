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
    'Sass',
    'Blockchain',
    'Solidity',
];

const services = [
    'Git',
    'GitHub',
    'Jenkins',
    'Docker',
    'Kubernetes',
    'Ansible',
    'ELK',
];

const tools = ['GitKraken', 'Postman', 'npm', 'Jest', 'VSCode', 'Trello'];

const allTechnologies = technologies.map((tech) => (
    <Skill name={tech} key={tech} />
));

const allSecondaryTechnologies = secondaryTechnologies.map(
    (secondaryTechnology) => (
        <Skill name={secondaryTechnology} key={secondaryTechnology} />
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
                    <h4>Autres technologies :</h4>
                </SquaredTitle>
                <Tools>{allSecondaryTechnologies}</Tools>
            </SkillsListing>

            <SkillsListing
                style={{
                    '--degree': '180deg',
                }}
            >
                <SquaredTitle>
                    <h4>Services :</h4>
                </SquaredTitle>
                <Tools>{allServices}</Tools>
            </SkillsListing>

            <SkillsListing
                style={{
                    '--degree': '180deg',
                }}
            >
                <SquaredTitle>
                    <h4>Outils et tests :</h4>
                </SquaredTitle>
                <Tools>{allTools}</Tools>
            </SkillsListing>
        </SkillsContainer>
    );
}

export default Skills;
