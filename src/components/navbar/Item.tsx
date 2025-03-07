import { NavbarItem } from '../../config/itemNavbarData';
import { iconMap } from '../../utils/iconMap'

type ItemProp = {
    itemNames: NavbarItem[];
    scroll: boolean;
    showMen?: boolean;
}
export const Item: React.FC<ItemProp> = ({ itemNames, scroll, showMen }) => {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        
        (id === 'Proyectos') ? section?.scrollIntoView({ behavior: 'smooth', block: "start" }) 
        : section?.scrollIntoView({ behavior: 'smooth', block: "center" });
        
    };
  return (
    <>
        {itemNames.map(item => {
            const IconComponent = iconMap[item.icon];
            return (
                <button className={` ${(scroll && !showMen) ? `3xl:text-description flex items-center gap-2 group hover:translate-x-[-60px] 
                    transition-transform duration-300 ease-in hover:w-[230px] hover:bg-white hover:p-3 hover:pl-9 
                    hover:[clip-path:polygon(20%_0%,100%_0%,100%_100%,0%_100%)] `
                    : `pl-3 pr-3 flex items-center gap-2 group lg:hover:bg-[#552d8a28] hover:bg-white hover:rounded-full transition-all 
                        3xl:pt:10 3xl:pb:10 2xl:pt-8 2xl:pb-8 xl:pt-6 xl:pb-6 lg:pb-3 lg:pt-3 pb-6 pt-6 
                    `} `}
                    key={item.label}
                    onClick={() => scrollToSection(item.label)}
                >
                    {IconComponent && <IconComponent className='3xl:w-[39px] 2xl:w-[30px] xl:w-[30px] lg:w-[28px]'/>} 
                    <span className={`${(scroll && !showMen) ? `hidden group-hover:block group-hover:text-primary` 
                        : `3xl:text-button xl:text-button-xl 2xl:text-button-2xl lg:block 3xl:block 2xl:block xl:block
                        lg:group-hover:text-white md:group-hover:text-primary group-hover:text-primary 
                        `
                        }`}
                    >
                            {item.label}
                    </span>
                </button>
            )
        })}
    </>
  )
}
