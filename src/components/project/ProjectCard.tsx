import React from "react";
import { ProjectModel } from "../../models/projectModel";
import { Github } from '../../components/icons/social/Github'

interface ProjectCardProps {
    project: ProjectModel;

}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="w-[450px] h-[455px] border border-secondary bg-gradient-to-br from-[#664A8C]/50 to-[#1B1426]/50 flex flex-col" 
    style={{ boxShadow: "2px 4px 30px 0px rgba(0, 0, 0, 0.25)",
     }}
    >
        <img src={project.image} alt={project.title} />
        <div className="p-4 flex flex-col justify-between h-[100%]">
            <div>
                <h3 className="text-tittleCard text-primary">{project.title}</h3>
                <p className="text-description">{project.description}</p>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    {project.stack.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
                <a className="w-[150px] h-[39px] border border-secondary text-description flex items-center justify-center
                bg-gradient-to-br from-secondary/20 to-[#1B1426]/20 gap-5
                " href={project.github}>
                    <Github style={{width: "20px", height: "20px", fill: "white"}}/> 
                    Ver en Github
                </a>
            </div>
        </div>
    </div>
  )
}
