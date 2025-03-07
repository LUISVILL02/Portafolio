import { Linkedin } from '../icons/social/Linkedin'
import { Email } from '../icons/social/Email'
import { Github } from '../icons/social/Github'
import { Wapp } from '../icons/social/Wapp'

export const Socials = () => {
  return (
    <div className='md:flex md:flex-col md:top-0 md:left-[5%] fixed gap-[16px] md:gap-[5px] items-center
                  flex flex-row top-10 right-10 md:right-[100%] z-20 backdrop-blur-md p-1 rounded-[10px] 
    '
    style={{
      animation: "transform-social 3s ease-in-out"
    }}
    >
        <div className='md:w-[1px] md:h-40 bg-white md:block hidden'></div>
        <a href="mailto:villamilluis123@gmail.com"><Email className='md:w-[30px] xl:w-[35px]'/></a>
        <a href="https://www.linkedin.com/in/luis-villamil-lv"><Linkedin className='md:w-[30px] xl:w-[35px]'/></a>
        <a href="https://github.com/LUISVILL02"><Github className='md:w-[30px] xl:w-[35px]'/></a>
        <a href="https://wa.link/6yc5wl"><Wapp className='md:w-[30px] xl:w-[35px]'/></a>
    </div>
  )
}
