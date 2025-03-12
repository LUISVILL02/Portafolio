import { iconSkillMap } from '../../utils/iconSkillsMap'

interface SkillsProps {
    lisSkills: { name: string; top: number; left: number }[];
    list: string;
}

export const LisSkills: React.FC<SkillsProps> = ({lisSkills, list}) => {
  return (
    <div className='flex flex-col items-center 2xl:gap-8 lg:gap-3 md:gap-3 gap-0'>
        <h3 className='3xl:text-h3 2xl:text-h3-md xl:text-h3-md lg:text-h3-sm text-h3-md'>{list}</h3>
        <div className='relative 3xl:w-[500px] 3xl:h-[500px] 2xl:w-[380px] 2xl:h-[380px] xl:w-[350px] xl:h-[380px] lg:w-[320px] lg:h-[350px] 
                      md:w-[300px] md:h-[300px] w-[340px] h-[400px]'>
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
            <div className='absolute bg-secondary  md:top-[40px] md:left-[40px] rounded-full 
              3xl:blur-[200px] 2xl:blur-[170px] xl:blur-[140px] lg:blur-[100px] z-0
              3xl:w-[397px] 3xl:h-[376px] 2xl:w-[350px] 2xl:h-[340px] xl:w-[310px] xl:h-[300px] lg:w-[200px] lg:h-[200px] 
              md:w-[190px] md:h-[190px] md:blur-[100px]
              w-[250px] h-[250px] blur-[120px] top-[80px] left-[70px]
            '></div>
        </div>
    </div>
  )
}
