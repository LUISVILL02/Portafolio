import React from "react";
import { ProjectModel } from "../../models/projectModel";
import { Github } from '../../components/icons/social/Github';
import { iconSkillMap } from '../../utils/iconSkillsMap';

interface ProjectCardProps {
    project: ProjectModel;

}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="w-[450px] h-[455px] max-2xl:w-[300px] max-2xl:h-[320px] border border-secondary bg-gradient-to-br from-[#664A8C]/50 to-[#1B1426]/50 flex flex-col" 
    style={{ boxShadow: "2px 4px 30px 0px rgba(0, 0, 0, 0.25)",
     }}
    >
        <img src={project.image} alt={project.title} />
        <div className="p-4 flex flex-col justify-between h-[100%]">
            <div className="w-full">
                <h3 className="text-tittleCard max-2xl:text-tittleCard-lg text-primary">{project.title}</h3>
                <div className="overflow-y-auto h-[50%] w-full none-scrollbar-card">
                    <p className="w-full text-description max-2xl:text-description-2xl">{project.description}</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex">
                    {project.stack.map((tech, index) => {
                        const IconSkill = iconSkillMap[tech];
                        return(
                            <IconSkill className="w-[39px] h-[39px] max-2xl:w-[30px] max-2xl:h-[30px]" key={index}/>
                        )
                    })}
                </div>
                <a className=" transition-[width] w-[150px] h-[39px] border border-secondary text-description flex items-center justify-center
                hover:shadow-[0_0_15px_0_#6412d1] hover:w-[170px]
                bg-gradient-to-br from-secondary/20 to-[#1B1426]/20 gap-5
                " href={project.github}>
                    <Github className="w-[20px] h-[20px]"/> 
                    Ver en Github
                </a>
            </div>
        </div>
    </div>
  )
}
