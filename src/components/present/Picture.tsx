import yo  from '../../assets/yo.png'

export const Picture = () => {
  return (
    <div className="relative w-[420px] h-[514px]">
      <img
        className="absolute w-full h-full object-cover z-10 rounded-[237px]"
        src={yo}
        alt="Foto de Luisvill"
      />
      <div className="absolute w-[584px] h-[505px] bg-primary
      rotate-[150deg]  z-0 left-[-29%]
      "
      style={{ clipPath: 'polygon(10% 0%, 90% 0%, 50% 100%)', 
        boxShadow: '0px 0px 0px 1px red'
       }}
      ></div>
    </div>
  )
}
