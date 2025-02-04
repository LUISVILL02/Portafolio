import { FormContact } from '../../components/contact/FormContact'
import { ContactIcon } from '../../components/icons/ContactIcon'

export const Contact = () => {
  return (
    <section id="Contacto" className='w-[100%] pt-[110px] mt-[75px] flex flex-col gap-14'>
        <div className='flex flex-row items-center gap-[18px]'>
          <ContactIcon style={{ width: "93px", height: "96px"}}/>
          <h2 className="text-h2 text-primary">CONTÁCTAME</h2>
        </div>
        <FormContact/>
    </section>
  )
}
