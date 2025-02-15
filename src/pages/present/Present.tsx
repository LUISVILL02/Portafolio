import { Cv } from "../../components/present/Cv"
import { Picture } from "../../components/present/Picture"


export const Present = () => {
  return (
    <section id="Home" className="animate-show animate-hide flex w-[100%] justify-between relative max-2xl:w-[100%]">
        <div className="w-[49%]">
          <h3 className="text-h3 max-2xl:text-h3-lg">¡Hola! Soy!</h3>
          <h2 className="text-h2 max-2xl:text-h2-lg text-primary animate-typing">LUISVILL</h2>
          <p className="text-[45px] max-2xl:text-p-md">Y soy ingeniero de sistemas, enfocado en el desarrollo web tanto en Backend como Frontend.
          </p>
        </div>
          <Picture/>
          <Cv/>
    </section>
  )
}
