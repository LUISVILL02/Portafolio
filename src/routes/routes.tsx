type Routes = {
    HOME: string;
    ABOUT_ME: string;
    PROJECT: string;
    SKILLS: string;
    CONTACT: string;
}

export const routes: Readonly<Routes> = Object.freeze({
    HOME: "/",
    ABOUT_ME: "/sobre-mi",
    PROJECT: "/proyectos",
    SKILLS: "/habilidades",
    CONTACT: "/contacto"
})