import { ProjectIcon } from '../../components/icons/ProjectIcon';
import { ListProjct } from '../../components/project/ListProjct';

export const Project = () => {
  return (
      <section
        id="Proyectos" 
        className={`animate-show animate-hide flex flex-col gap-20 pt-[110px] mt-[75px] relative`}>
        <div className="absolute w-[625px] h-[632px] bg-secondary rounded-[50%] left-[30%] top-[30%] blur-[300px] -z-10"></div>
        <div className='flex flex-row items-center gap-[18px]'>
          <ProjectIcon className='3xl:w-[93px] 3xl:h-[96px] 2xl:w-[50px] 2xl:h-[50px]'/>
          <h2 className="3xl:text-h2 2xl:text-h2-2xl text-primary">PROYECTOS</h2>
        </div>
        <ListProjct/>
      </section>
  )
}
