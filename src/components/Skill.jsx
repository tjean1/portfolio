import React from 'react';
import { SkillContainer } from '../styles';
import toFilename from '../utils/toFilename';

function Skill({ name }) {
    const img = toFilename(name);

    return (
        <SkillContainer>
            <img src={`/logos/${img}.svg`} alt=""></img>
            <span>{name}</span>
        </SkillContainer>
    );
}

export default Skill;
