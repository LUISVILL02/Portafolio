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
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <>
        {itemNames.map(item => {
            const IconComponent = iconMap[item.icon];
            return (
                <button className="flex items-center text-tittleCard gap-2 group"
                    key={item.label}
                    onClick={() => scrollToSection(item.label)}
                >
                    {IconComponent && <IconComponent style={{}}/>} <p className={`${scroll ? 'hidden group-hover:block' : ''}`}>{item.label}</p>
                </button>
            )
        })}
    </>
  )
}
