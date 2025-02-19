import { FormContact } from '../../components/contact/FormContact'
import { ContactIcon } from '../../components/icons/ContactIcon'

export const Contact = () => {
  return (
    <section id="Contacto" className='animate-show animate-hide w-[100%] pt-[110px] mt-[75px] flex flex-col gap-14'>
        <div className='flex flex-row items-center gap-[18px]'>
          <ContactIcon className='3xl:w-[93px] 3xl:h-[96px] 2xl:w-[50px] 2xl:h-[50px] xl:w-[45px] xl:h-[45px]'/>
          <h2 className="3xl:text-h2 2xl:text-h2-2xl xl:text-h2-xl text-primary">CONTÁCTAME</h2>
        </div>
        <FormContact/>
    </section>
  )
}
