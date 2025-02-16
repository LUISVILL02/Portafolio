import { Cv } from "../../components/present/Cv"
import { Picture } from "../../components/present/Picture"


export const Present = () => {
  return (
    <section id="Home" className="animate-show animate-hide flex w-[100%] justify-between relative max-2xl:w-[100%]">
        <div className="3xl:w-[45%] 2xl:w-[49%] xl:w-[45%]">
          <h3 className="3xl:text-h3 2xl:text-h3-2xl">¡Hola! Soy!</h3>
          <h2 className="3xl:text-h2 2xl:text-h2-2xl text-primary animate-typing">LUISVILL</h2>
          <p className="3xl:text-[45px] 2xl:text-p-2xl">Y soy ingeniero de sistemas, enfocado en el desarrollo web tanto en Backend como Frontend.
          </p>
        </div>
          <Picture/>
          <Cv/>
    </section>
  )
}
