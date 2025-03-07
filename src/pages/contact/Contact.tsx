import { FormContact } from '../../components/contact/FormContact'
import { ContactIcon } from '../../components/icons/ContactIcon'

export const Contact = () => {
  return (
    <section id="Contacto" className='animate-show animate-hide w-[100%] md:pt-[110px] md:mt-[75px] flex flex-col gap-14 lg:items-start items-center'>
        <div className='flex flex-row items-center gap-[18px] lg:justify-start justify-center'>
          <ContactIcon className='3xl:w-[93px] 3xl:h-[96px] 2xl:w-[50px] 2xl:h-[50px] xl:w-[45px] xl:h-[45px] lg:w-[40px] lg:h-[40px] w-[35px] h-[35px]'/>
          <h2 className="3xl:text-h2 2xl:text-h2-2xl xl:text-h2-xl lg:text-h2-lg text-h2-lg text-primary">CONTÁCTAME</h2>
        </div>
        <FormContact/>
    </section>
  )
}
