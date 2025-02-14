import { iconSkillMap } from '../../utils/iconSkillsMap'

interface SkillsProps {
    lisSkills: { name: string; top: number; left: number }[];
    list: string;
}

export const LisSkills: React.FC<SkillsProps> = ({lisSkills, list}) => {
  return (
    <div className='flex flex-col items-center gap-16'>
        <h3 className='text-[50px]'>{list}</h3>
        <div className='relative w-[500px] h-[500px]'>
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
                        <IconSkills style={{}}/>
                    </div>
                )
            })}
            <div className='absolute bg-secondary w-[397px] h-[376px] top-[40px] left-[40px] rounded-full blur-[200px] z-0'></div>
        </div>
    </div>
  )
}
