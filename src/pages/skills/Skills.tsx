import { SkillsIcon } from '../../components/icons/SkillsIcon';
import { LisSkills } from '../../components/skills/LisSkills';
import { listMainSkills, listSecondarySkills } from '../../models/skills'

export const Skills = () => {
  return (
    <section id="Habilidades" className='animate-show animate-hide pt-[110px] mt-[75px] flex flex-col gap-20'>
        <div className='flex flex-row items-center gap-[18px]'>
          <SkillsIcon className='3xl:w-[93px] 3xl:h-[96px] 2xl:w-[50px] 2xl:h-[50px]'/>
          <h2 className="3xl:text-h2 2xl:text-h2-2xl text-primary">HABILIDADES</h2>
        </div>
        <div className='flex flex-row justify-center gap-[100px]'>
          <LisSkills lisSkills={listMainSkills} list='Principales'/>
          <LisSkills lisSkills={listSecondarySkills} list='Adicionales'/>
        </div>
    </section>
  )
}
