import { ProjectIcon } from '../components/icons/ProjectIcon';
import { ExperienceIcon } from '../components/icons/ExperienceIcon';
import { SkillsIcon } from '../components/icons/SkillsIcon';
import { ContactIcon } from '../components/icons/ContactIcon';
import { AboutMeIcon } from '../components/icons/AboutMeIcon';

import { CSSProperties } from 'react';

interface IconProps {
    style?: CSSProperties;
    className?: string;
}

export const iconMap: Record<string, React.FC<IconProps>> = {
    Sobre_me: AboutMeIcon,
    Proyectos: ProjectIcon,
    Experiencia: ExperienceIcon,
    Habilidades: SkillsIcon,    
    Contacto: ContactIcon,
};