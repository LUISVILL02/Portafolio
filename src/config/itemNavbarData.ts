import {routes} from '../routes/routes';

export interface NavbarItem {
    label: string;
    icon: string;
    href: string;
}

export interface NavbarData {
    [key: string]: NavbarItem[];
}

export const itemNavbarData: NavbarData = {
    ITEMS: [
        {
            label: "Sobre mi",
            icon: "Sobre_me",
            href: routes.ABOUT_ME
        },
        {
            label: "Proyectos",
            icon: "Proyectos",
            href: routes.PROJECT
        },
        {
            label: "Habilidades",
            icon: "Habilidades",
            href: routes.SKILLS
        },
        {
            label: "Contacto",
            icon: "Contacto",
            href: routes.CONTACT
        }
    ]
}