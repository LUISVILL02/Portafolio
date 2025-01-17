import { ProjectIcon } from '../../components/icons/ProjectIcon';
import { ListProjct } from '../../components/project/ListProjct';

export const Project = () => {
  return (
    <section id="Proyectos" className='flex flex-col gap-20'>
      <div className='flex flex-row items-center gap-[18px]'>
        <ProjectIcon style={{ width: "93px", height: "96px"}}/>
        <h2 className="text-h2 text-primary">PROYECTOS</h2>
      </div>
      <ListProjct/>
    </section>
  )
}
