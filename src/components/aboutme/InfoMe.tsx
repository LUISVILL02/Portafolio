import { AboutMeIcon } from "../icons/AboutMeIcon"


export const InfoMe = () => {

  return (
    <section id="Sobre mi" className="animate-show animate-hide flex mt-[75px] pt-[110px] gap-52">
      <div className="flex flex-col justify-between w-[918px] gap-12">
          <div className='flex flex-row items-center gap-[18px]'>
            <AboutMeIcon 
              className="w-[93px] h-[96px] max-2xl:w-[50px] max-2xl:h-[50px]"
              />
            <h2 className="text-h2 max-2xl:text-h2-lg text-primary">SOBRE MI</h2>
          </div>
          <div>  
            <h3 className="text-h3 max-2xl:text-h3-lg">Ingeniero de Sistemas</h3>
            <h4 className="text-p max-2xl:text-p-md">Backend & Frontend</h4>
          </div>
          <p className="text-p max-2xl:text-[25px] text-primary">Disfruto trabajar en entornos colaborativos, aplicando metodologías ágiles para lograr objetivos de manera rápida y efectiva. Siempre estoy en busca de nuevos retos que me permitan crecer y aportar valor al equipo.</p>
          <button 
            onClick={() => document.getElementById('Contacto')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className={`transition-[background] duration-300 bg-secondary w-[291px] h-[81px] rounded-full text-[35px] 
              max-2xl:text-h2-xs hover:bg-primary hover:border hover:border-secondary max-2xl:w-[200px] max-2xl:h-[60px]`}>
            Contáctame
          </button>
      </div>
      <div className="flex items-center relative">
        <div className="absolute w-[566px] h-[632px] bg-secondary rounded-[50%] -left-40 blur-[300px] -z-50"></div>
        <div className="w-[184px] h-[184px] bg-primary rotate-[45deg] max-2xl:w-[100px] max-2xl:h-[100px]"
        style={{ 
          animation: "rotate 30s ease-in-out infinite",
          boxShadow: "inset 0px 0px 50px 20px rgba(85, 45, 138, 0.5), 0px 0px 50px 80px rgba(186, 134, 255, 0.2), 0px 0px 0px 50px rgba(186, 134, 255, 0.3), 0px 0px 0px 20px rgba(186, 134, 255, 0.5)" }}
        ></div>
      </div>
    </section>
  )
}
