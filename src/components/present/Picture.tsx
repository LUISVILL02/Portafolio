import yo  from '../../assets/yo.png'

export const Picture = () => {
  return (
    <div className="relative w-[420px] h-[100%] max-2xl:w-[25%] max-2xl:h-[25%]">
      <div className="relative w-full h-full rounded-full z-10 left-20">
        <img
          className="w-full h-full object-contain z-10 rounded-full"
          src={yo}
          alt="Foto de Luisvill"
        />
      </div>
      <div className="absolute w-[584px] h-[505px] bg-primary
      rotate-[150deg]  z-0 top-0 left-[-20%] max-2xl:w-[400px] max-2xl:h-[300px] max-2xl:left-[-10%] max-2xl:top-0
      "
      style={{  clipPath: 'polygon(10% 0%, 90% 0%, 50% 100%)',
        boxShadow: '0px 0px 30px 5px red'
       }}
      ></div>
    </div>
  )
}
