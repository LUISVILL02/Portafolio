import { Cv } from "../../components/present/Cv"
import { Picture } from "../../components/present/Picture"


export const Present = () => {
  return (
    <section id="Home" className="animate-show animate-hide flex w-[100%] relative justify-between">
        <div className="3xl:w-[45%] 2xl:w-[35%] xl:w-[45%]">
          <h3 className="3xl:text-h3 2xl:text-h3-2xl xl:text-h3-xl">¡Hola! Soy!</h3>
          <h2 className="3xl:text-h2 2xl:text-h2-2xl xl:text-h2-xl text-primary animate-typing">LUISVILL</h2>
          <p className="3xl:text-[45px] 2xl:text-p-2xl xl:text-p-xl">Y soy ingeniero de sistemas, enfocado en el desarrollo web tanto en Backend como Frontend.
          </p>
        </div>
          <Picture/>
          <Cv/>
    </section>
  )
}
