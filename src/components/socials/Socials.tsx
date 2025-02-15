import { Linkedin } from '../icons/social/Linkedin'
import { Email } from '../icons/social/Email'
import { Github } from '../icons/social/Github'
import { Wapp } from '../icons/social/Wapp'

export const Socials = () => {
  return (
    <div className='flex flex-col top-0 left-[5%] fixed gap-[16px] items-center '>
        <div className='w-[1px] h-40 bg-white'></div>
        <a href=""><Email style={{}}/></a>
        <a href="https://www.linkedin.com/in/luis-villamil-lv"><Linkedin/></a>
        <a href="https://github.com/LUISVILL02"><Github/></a>
        <a href="https://wa.link/6yc5wl"><Wapp/></a>
    </div>
  )
}
