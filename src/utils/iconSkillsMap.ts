import React, { CSSProperties } from "react";

import { SpringBoot } from '../components/icons/skills/SpringBoot';
import { ReactJs } from '../components/icons/skills/ReactJs';
import { Postgresql } from '../components/icons/skills/Postgresql';
import { Java } from '../components/icons/skills/Java';
import { Javascript } from '../components/icons/skills/Javascript';
import { Html } from '../components/icons/skills/Html';
import { Git } from '../components/icons/skills/Git';
import { Docker } from '../components/icons/skills/Docker';
import {  Css } from '../components/icons/skills/Css'
import { C } from '../components/icons/skills/secondary/C';
import { Figma } from '../components/icons/skills/secondary/Figma';
import { Kotlin } from '../components/icons/skills/secondary/Kotlin';
import { NodeJs } from '../components/icons/skills/secondary/NodeJs';


interface IconProps {
    style?: CSSProperties;
    className?: string;
}

export const iconSkillMap: Record<string, React.FC<IconProps>> = {
    SpringBoot,
    ReactJs,
    Postgresql,
    Java,
    Javascript,
    Html,
    Git,
    Docker,
    Css,
    C,
    Figma,
    Kotlin,
    NodeJs
}