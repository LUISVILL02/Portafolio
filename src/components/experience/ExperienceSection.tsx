import { ExperienceIcon } from "../icons/ExperienceIcon"
import { experiences } from "./experienceList"
import { TimelineItem } from "./TimelineItem"

export const ExperienceSection = () => {  
  
  return (
    <section id="Experiencia" className="animate-show animate-hide mt-[75px] pt-[110px]">
      <div className="flex flex-col items-center lg:items-start w-full">
        <div className='flex flex-row items-center gap-[18px] mb-16'>
          <ExperienceIcon 
            className="3xl:w-[93px] 3xl:h-[96px] 2xl:w-[50px] 2xl:h-[50px] xl:w-[40px] xl:h-[40px] lg:w-[30px] w-[35px]"
            />
          <h2 className="3xl:text-h2 2xl:text-h2-2xl xl:text-h2-xl lg:text-h2-lg text-h2-lg text-primary">EXPERIENCIA</h2>        </div>        <div className="timeline-container relative py-8 w-full">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              index={index}
              title={experience.title}
              company={experience.company}
              location={experience.location}
              period={experience.period}
              functions={experience.functions}
              achievements={experience.achievements}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
