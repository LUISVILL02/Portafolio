import Foto  from '../../assets/FotoEmpleo_sin_fondo.png'

export const Picture = () => {
  return (
    <div className="relative lg:left-[70px]
                  3xl:w-[25%] 3xl:h-[25%]  
                  2xl:w-[20%] 2xl:h-[20%]
                  xl:w-[30%] xl:h-[30%]
                  lg:w-[25%] lg:h-[25%]
                  md:w-[100%] md:h-[100%]
                  w-[60%] h-[60%]
                  ">
      <div className="relative 3xl:w-[100%] 3xl:h-[100%] z-10 3xl:left-20
        2xl:w-[350px] 2xl:h-[350px] 2xl:left-5 2xl:-top-5 lg:w-[250px] lg:h-[250px] lg:-left-10 
        md:left-[25%] md:h-[300px] md:w-[50%] md:top-0
        left-16
      ">
        <img
          className="w-full h-full object-contain z-10 mask-fade"
          src={Foto}
          alt="Foto de Luisvill"
        />
      </div>
      <div className="absolute bg-primary
              rotate-[150deg]  z-0 lg:top-0
              3xl:w-[500px] 3xl:h-[400px] 3xl:left-[-10%] 3xl:top-0
              2xl:w-[400px] 2xl:h-[300px] 2xl:left-[-30%] 2xl:top-0
              xl:w-[320px] xl:h-[220px] xl:-left-20 xl:top-10
              lg:w-[300px] lg:h-[200px] lg:-left-20
              md:w-[350px] md:h-[250px] md:top-5 md:left-[15%]
              w-[350px] h-[250px] left-[-10%] top-8 hidden lg:block
      "
      style={{  clipPath: 'polygon(10% 0%, 90% 0%, 50% 100%)',
        boxShadow: '0px 0px 30px 5px red'
       }}
      ></div>
    </div>
  )
}
