import { lisProjects } from '../../models/projects'
import { ProjectCard } from './ProjectCard'

export const ListProjct = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {lisProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}
    </div>
  )
}
