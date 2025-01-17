import { Button } from "@mui/material"


export const InfoMe = () => {
  return (
    <section id="Sobre mi" className="flex mt-[75px] pt-[110px] gap-52">
      <div className="flex flex-col justify-between w-[918px] gap-12">
          <h2 className="text-h2 text-primary">SOBRE MI</h2>
          <div>  
            <h3 className="text-h3">Ingeniero de Sistemas</h3>
            <h4 className="text-p">Backend & Frontend</h4>
          </div>
          <p className="text-p text-primary">Disfruto trabajar en entornos colaborativos, aplicando metodologías ágiles para lograr objetivos de manera rápida y efectiva. Siempre estoy en busca de nuevos retos que me permitan crecer y aportar valor al equipo.</p>
          <button className="bg-secondary w-[291px] h-[81px] text-[35px]">
            Contáctame
          </button>
      </div>
      <div className="flex items-center">
        <div className="w-[184px] h-[184px] bg-primary rotate-[40deg]"
        style={{ boxShadow: "inset 0px 0px 50px 20px rgba(85, 45, 138, 0.5), 0px 0px 50px 80px rgba(186, 134, 255, 0.2), 0px 0px 0px 50px rgba(186, 134, 255, 0.3), 0px 0px 0px 20px rgba(186, 134, 255, 0.5)" }}
        ></div>
      </div>
    </section>
  )
}
