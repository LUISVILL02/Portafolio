import { Cv } from "../../components/present/Cv"
import { Picture } from "../../components/present/Picture"


export const Present = () => {
  return (
    <section id="Home" className="flex gap-[100px] w-[94%] justify-between relative">
        <div className="w-[49%]">
          <h3 className="text-h3">¡Hola! Soy!</h3>
          <h2 className="text-h2 text-primary">LUISVILL</h2>
          <p className="text-[45px]">Y soy ingeniero de sistemas, enfocado en el desarrollo web tanto en Backend como Frontend.
          </p>
        </div>
        <div>
          <Picture/>
          <Cv/>
        </div>
    </section>
  )
}
