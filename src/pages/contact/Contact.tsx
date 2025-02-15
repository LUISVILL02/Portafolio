import { FormContact } from '../../components/contact/FormContact'
import { ContactIcon } from '../../components/icons/ContactIcon'

export const Contact = () => {
  return (
    <section id="Contacto" className='animate-show animate-hide w-[100%] pt-[110px] mt-[75px] flex flex-col gap-14'>
        <div className='flex flex-row items-center gap-[18px]'>
          <ContactIcon className='w-[93px] h-[96px] max-2xl:w-[50px] max-2xl:h-[50px]'/>
          <h2 className="text-h2 max-2xl:text-h2-lg text-primary">CONTÁCTAME</h2>
        </div>
        <FormContact/>
    </section>
  )
}
