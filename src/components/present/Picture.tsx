import yo  from '../../assets/yo.png'

export const Picture = () => {
  return (
    <div className="relative w-[420px] h-[100%]
                  3xl:w-[25%] 3xl:h-[25%]  
                  2xl:w-[25%] 2xl:h-[25%]
                  xl:w-[30%] xl:h-[30%]
                  ">
      <div className="relative w-full h-full rounded-full z-10 left-20">
        <img
          className="w-full h-full object-contain z-10 rounded-full"
          src={yo}
          alt="Foto de Luisvill"
        />
      </div>
      <div className="absolute w-[584px] h-[505px] bg-primary
              rotate-[150deg]  z-0 top-0 left-[-20%] 
              3xl:w-[500px] 3xl:h-[400px] 3xl:left-[-10%] 3xl:top-0
              2xl:w-[400px] 2xl:h-[300px] 2xl:left-[-10%] 2xl:top-0
              xl:w-[320px] xl:h-[220px] xl:left-0 xl:top-10
      "
      style={{  clipPath: 'polygon(10% 0%, 90% 0%, 50% 100%)',
        boxShadow: '0px 0px 30px 5px red'
       }}
      ></div>
    </div>
  )
}
