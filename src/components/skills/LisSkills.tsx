import { iconSkillMap } from '../../utils/iconSkillsMap'

interface SkillsProps {
    lisSkills: string[];
    list: string;
}

export const LisSkills: React.FC<SkillsProps> = ({lisSkills, list}) => {
  return (
    <div>
        <h3>{list}</h3>
        <div>
            {lisSkills.map((skills: string, index: number) => {
                const IconSkills = iconSkillMap[skills];
                return(
                    <IconSkills style={{}} key={index}/>
                )
            })}
        </div>
    </div>
  )
}
