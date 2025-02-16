import { NavbarItem } from '../../config/itemNavbarData';
import { iconMap } from '../../utils/iconMap'

type ItemProp = {
    itemNames: NavbarItem[];
    scroll: boolean;
}
export const Item: React.FC<ItemProp> = ({ itemNames, scroll }) => {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: "center" });
        }
    };
  return (
    <>
        {itemNames.map(item => {
            const IconComponent = iconMap[item.icon];
            return (
                <button className={` ${scroll ? `text-description flex items-center gap-2 group hover:translate-x-[-60px] 
                    transition-transform duration-300 ease-in hover:w-[230px] hover:bg-white hover:p-3 hover:pl-9 
                    hover:[clip-path:polygon(20%_0%,100%_0%,100%_100%,0%_100%)] `
                    : `pl-3 pr-3 flex items-center gap-2 group hover:bg-[#552d8a28] hover:rounded-full transition-all 
                        3xl:pt:10 3xl:pb:10 2xl:pt-8 2xl:pb-8 xl:pt-6 xl:pb-6
                    `} `}
                    key={item.label}
                    onClick={() => scrollToSection(item.label)}
                >
                    {IconComponent && <IconComponent className='3xl:w-[39px] xl:w-[25px]'/>} 
                    <span className={`${scroll ? `hidden group-hover:block group-hover:text-primary` 
                        : `3xl:text-button xl:text-button-xl 2xl:text-button-2xl`
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
