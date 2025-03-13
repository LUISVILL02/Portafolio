import { Linkedin } from '../icons/social/Linkedin'
import { Email } from '../icons/social/Email'
import { Github } from '../icons/social/Github'
import { Wapp } from '../icons/social/Wapp'

export const Socials = () => {
  return (
    <div className='lg:flex lg:flex-col lg:top-0 lg:left-[5%] fixed gap-[16px] lg:gap-[5px] items-center
                  flex flex-row top-0 right-3 lg:right-[100%] z-40 backdrop-blur-md p-1 rounded-[10px] 
    '
    style={{
      animation: "transform-social 3s ease-in-out"
    }}
    >
        <div className='lg:w-[1px] lg:h-40 bg-white lg:block hidden'></div>
        <a href="mailto:villamilluis123@gmail.com"><Email className='w-[30px] md:w-[30px] xl:w-[35px]'/></a>
        <a href="https://www.linkedin.com/in/luis-villamil-lv"><Linkedin className='w-[30px] md:w-[30px] xl:w-[35px]'/></a>
        <a href="https://github.com/LUISVILL02"><Github className='w-[30px] md:w-[30px] xl:w-[35px]'/></a>
        <a href="https://wa.link/6yc5wl"><Wapp className='w-[30px] md:w-[30px] xl:w-[35px]'/></a>
    </div>
  )
}
