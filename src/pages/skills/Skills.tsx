import { SkillsIcon } from '../../components/icons/SkillsIcon';
import { LisSkills } from '../../components/skills/LisSkills';
import { listMainSkills, listSecondarySkills } from '../../models/skills'

export const Skills = () => {
  return (
    <section id="Habilidades" className='pt-[110px] mt-[75px] flex flex-col gap-20'>
        <div className='flex flex-row items-center gap-[18px]'>
          <SkillsIcon style={{ width: "93px", height: "96px"}}/>
          <h2 className="text-h2 text-primary">HABILIDADES</h2>
        </div>
        <div className='flex flex-row justify-center gap-[100px]'>
          <LisSkills lisSkills={listMainSkills} list='Principales'/>
          <LisSkills lisSkills={listSecondarySkills} list='Adicionales'/>
        </div>
    </section>
  )
}
