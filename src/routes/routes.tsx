type Routes = {
    HOME: string;
    ABOUT_ME: string;
    PROJECT: string;
    EXPERIENCE: string;
    SKILLS: string;
    CONTACT: string;
}

export const routes: Readonly<Routes> = Object.freeze({
    HOME: "/",
    ABOUT_ME: "/sobre-mi",
    PROJECT: "/proyectos",
    EXPERIENCE: "/experiencia",
    SKILLS: "/habilidades",
    CONTACT: "/contacto"
})