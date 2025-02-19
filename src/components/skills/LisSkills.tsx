import { iconSkillMap } from '../../utils/iconSkillsMap'

interface SkillsProps {
    lisSkills: { name: string; top: number; left: number }[];
    list: string;
}

export const LisSkills: React.FC<SkillsProps> = ({lisSkills, list}) => {
  return (
    <div className='flex flex-col items-center gap-16 max-2xl:gap-8'>
        <h3 className='3xl:text-h3 2xl:text-h3-md xl:text-h3-md'>{list}</h3>
        <div className='relative 3xl:w-[500px] 3xl:h-[500px] 2xl:w-[380px] 2xl:h-[380px] xl:w-[350px] xl:h-[380px]'>
            {lisSkills.map((skill, index: number) => {
                const IconSkills = iconSkillMap[skill.name];
                return(
                    <div 
                    key={index}
                    className="absolute hover:cursor-pointer"
                    style={{
                      zIndex: 10,
                      top: `${skill.top}%`,
                      left: `${skill.left}%`,
                      animation: "floating 3s ease-in-out infinite",
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                    >
                        <IconSkills/>
                    </div>
                )
            })}
            <div className='absolute bg-secondary w-[397px] h-[376px] top-[40px] left-[40px] rounded-full blur-[200px] z-0'></div>
        </div>
    </div>
  )
}
