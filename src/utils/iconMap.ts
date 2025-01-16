import { HomeIcon } from '../components/icons/HomeIcon';
import { ProjectIcon } from '../components/icons/ProjectIcon';
import { SkillsIcon } from '../components/icons/SkillsIcon';
import { ContactIcon } from '../components/icons/ContactIcon';

export const iconMap: Record<string, React.FC> = {
    Sobre_me: HomeIcon,
    Proyectos: ProjectIcon,
    Habilidades: SkillsIcon,
    Contacto: ContactIcon,
};