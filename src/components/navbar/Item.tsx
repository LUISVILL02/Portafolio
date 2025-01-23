import { Button } from "@mui/material";
import { NavbarItem } from '../../config/itemNavbarData';
import { iconMap } from '../../utils/iconMap'

type ItemProp = {
    itemNames: NavbarItem[];
}
export const Item: React.FC<ItemProp> = ({ itemNames }) => {
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
                <Button
                    key={item.label}
                    sx={{color: 'text.secondary'}}
                    onClick={() => scrollToSection(item.label)}
                >
                    {IconComponent && <IconComponent style={{}}/>} {item.label}
                </Button>
            )
        })}
    </>
  )
}
