import  eliminatorias  from '../assets/eliminatorias.png';
import  escuelaEnLinea  from '../assets/escuelaEnLinea.png';
import  nba  from '../assets/nba.png';
import { ProjectModel } from './projectModel';

export const lisProjects: ProjectModel[] = [
    {
        id: 1,
        title: "Escuela en linea",
        description: "Proyecto full stack enfocado en la gestión de solicitudes e inquietudes de los acudientes de los estudiantes de un colegio.",
        image: escuelaEnLinea,
        stack: ["Spring-boot", "React", "Postgresql"],
        github: "https://github.com/LUISVILL02/EscuelaEnLinea"
    },
    {
        id: 2,
        title: "NBA Database",
        description: "Diseño e implementación de practica, de la base de datos de la NBA.",
        image: nba,
        stack: ["Postgresql"],
        github: "https://github.com/LUISVILL02/DataBaseNBA"
    },
    {   
        id: 3,
        title: "Eliminatorias",
        description: "Aplicacion web para los partidos de las eliminatorias mundiales de la fifa.",
        image: eliminatorias,
        stack: ["Spring-boot", "React", "Postgresql", "Css"],
        github: "https://github.com/LUISVILL02/AppEliminatorias"
    },
]