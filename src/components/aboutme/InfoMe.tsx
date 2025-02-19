import { AboutMeIcon } from "../icons/AboutMeIcon"


export const InfoMe = () => {

  return (
    <section id="Sobre mi" className="animate-show animate-hide flex mt-[75px] pt-[110px] 3xl:gap-52 2xl:gap-60 xl:gap-48">
      <div className="flex flex-col justify-between w-[60%] 2xl:gap-10 xl:gap-10">
          <div className='flex flex-row items-center gap-[18px]'>
            <AboutMeIcon 
              className="3xl:w-[93px] 3xl:h-[96px] 2xl:w-[50px] 2xl:h-[50px] xl:w-[40px] xl:h-[40px]"
              />
            <h2 className="3xl:text-h2 2xl:text-h2-2xl xl:text-h2-xl text-primary">SOBRE MI</h2>
          </div>
          <div>  
            <h3 className="3xl:text-h3 2xl:text-h3-2xl xl:text-h3-xl">Ingeniero de Sistemas</h3>
            <h4 className="3xl:text-p 2xl:text-p-2xl xl:text-p-xl">Backend & Frontend</h4> 
          </div>
          <p className="3xl:text-p 2xl:text-p-2xl xl:text-p-xl  text-primary">Disfruto trabajar en entornos colaborativos, aplicando metodologías ágiles para lograr objetivos de manera rápida y efectiva. Siempre estoy en busca de nuevos retos que me permitan crecer y aportar valor al equipo.</p>
          <button 
            onClick={() => document.getElementById('Contacto')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className={`transition-[background] duration-300 bg-secondary 3xl:w-[291px] 3xl:h-[90px] rounded-full 3xl:text-[35px] 
              2xl:text-button-2xl xl:text-button-xl hover:bg-primary hover:border hover:border-secondary 2xl:w-[200px] 2xl:h-[60px] xl:w-[150px] xl:h-[50px]`}>
            Contáctame
          </button>
      </div>
      <div className="flex items-center relative">
        <div className="absolute w-[566px] h-[632px] bg-secondary rounded-[50%] -left-40 blur-[300px] -z-50"></div>
        <div className="3xl:w-[184px] 3xl:h-[184px] bg-primary rotate-[45deg] 2xl:w-[100px] 2xl:h-[100px] xl:w-[60px] xl:h-[60px]"
        style={{ 
          animation: "rotate 30s ease-in-out infinite",
          boxShadow: "inset 0px 0px 50px 20px rgba(85, 45, 138, 0.5), 0px 0px 50px 80px rgba(186, 134, 255, 0.2), 0px 0px 0px 50px rgba(186, 134, 255, 0.3), 0px 0px 0px 20px rgba(186, 134, 255, 0.5)" }}
        ></div>
      </div>
    </section>
  )
}
