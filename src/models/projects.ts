import  eliminatorias  from '../assets/eliminatorias.png';
import  escuelaEnLinea  from '../assets/escuelaEnLinea.png';
import  nba  from '../assets/nba.png';
import survey from '../assets/Survey.png';
import sentily from '../assets/Sentily.png';
import bovinTrack from '../assets/bovintrack_ico.png';
import { ProjectModel } from './projectModel';

export const lisProjects: ProjectModel[] = [
    {
        id: 1,
        title: "Escuela en linea",
        description: "Proyecto full stack enfocado en la gestión de solicitudes e inquietudes de los acudientes de los estudiantes de un colegio.",
        image: escuelaEnLinea,
        stack: ["SpringBoot", "ReactJs", "Postgresql"],
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
        title: "BovinTrack",
        description: "Sistema de monitoreo en tiempo real haciendo uso de una aplicación movil junto a un servidor webSockect",
        image: bovinTrack,
        stack: ["SpringBoot", "Kotlin", "Postgresql"],
        github: ""
    },
    {
        id: 4,
        title: "Sistema de encuestas",
        description: "Aplicacion web para la creación y gestión de encuestas.",
        image: survey,
        stack: ["ReactJs", "Typescript"],
        github: "https://github.com/LUISVILL02/Survey"
    },
    {
        id: 5,
        title: "Sentily",
        description: "Aplicación de registro de emociones y notas de estado de ánimo.",
        image:sentily,
        stack: ["ReactJs", "Typescript"],
        github: "https://github.com/LUISVILL02/sentily"
    },
    {   
        id: 6,
        title: "Eliminatorias",
        description: "Aplicacion web para los partidos de las eliminatorias mundiales de la fifa.",
        image: eliminatorias,
        stack: ["SpringBoot", "ReactJs", "Postgresql", "Css"],
        github: "https://github.com/LUISVILL02/AppEliminatorias"
    },
]