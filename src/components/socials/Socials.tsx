import { Linkedin } from '../icons/social/Linkedin'
import { Email } from '../icons/social/Email'
import { Github } from '../icons/social/Github'
import { Wapp } from '../icons/social/Wapp'

export const Socials = () => {
  return (
    <div className='flex flex-col top-0 left-[5%] fixed gap-[16px] items-center '>
        <div className='w-[1px] h-40 bg-white'></div>
        <a href="mailto:villamilluis123@gmail.com"><Email className='xl:w-[40px]'/></a>
        <a href="https://www.linkedin.com/in/luis-villamil-lv"><Linkedin className='xl:w-[40px]'/></a>
        <a href="https://github.com/LUISVILL02"><Github className='xl:w-[40px]'/></a>
        <a href="https://wa.link/6yc5wl"><Wapp className='xl:w-[40px]'/></a>
    </div>
  )
}
