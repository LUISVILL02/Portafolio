import { lisProjects } from '../../models/projects'
import { ProjectCard } from './ProjectCard'

export const ListProjct = () => {
  return (
    <div className={`grid gap-4 2xl:grid-cols-3 2xl:gap-14 xl:grid-cols-2 
              lg:grid-cols-2 xl:gap-10 xl:justify-between grid-cols-1 md:gap-10 justify-items-center`}>
        {lisProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}
    </div>
  )
}
