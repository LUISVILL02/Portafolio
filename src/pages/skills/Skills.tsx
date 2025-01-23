import { SkillsIcon } from '../../components/icons/SkillsIcon';

export const Skills = () => {
  return (
    <section id="Habilidades" className='pt-[110px] mt-[75px]'>
        <div className='flex flex-row items-center gap-[18px]'>
          <SkillsIcon style={{ width: "93px", height: "96px"}}/>
          <h2 className="text-h2 text-primary">HABILIDADES</h2>
        </div>
    </section>
  )
}
