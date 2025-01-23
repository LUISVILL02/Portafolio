import React, { CSSProperties } from "react";

import { SpringBoot } from '../components/icons/skills/SpringBoot';
import { ReactJs } from '../components/icons/skills/ReactJs';
import { Postgresql } from '../components/icons/skills/Postgresql';
import { Java } from '../components/icons/skills/Java';
import { Javascript } from '../components/icons/skills/Javascript';
import { Html } from '../components/icons/skills/Html';
import { Git } from '../components/icons/skills/Git';
import { Docker } from '../components/icons/skills/Docker';
import { Css } from '../components/icons/skills/Css';


interface IconProps {
    style: CSSProperties;
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
    Css
}