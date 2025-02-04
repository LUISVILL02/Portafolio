import { Item } from "./Item"
import {itemNavbarData} from "../../config/itemNavbarData";
import { Socials } from "../socials/Socials";
import { HomeIcon } from '../../components/icons/HomeIcon';
import { useNavbar } from "../../hooks/useNavbar";

export const Navbar = () => {

  const { scroll } = useNavbar();
  return (
    <>
      <header className="h-[120px] mb-40">
          <nav className={` transition-all ${scroll ? 'fixed top-[25%] right-0 flex flex-col h-max p-4 mr-5 gap-5' : "bg-black backdrop-blur-md bg-opacity-20 rounded-[50px] border border-[#552D8A] flex justify-between items-center h-full pr-10 pl-10"} `}
          >
            <p className=" flex items-center gap-2 text-button">
              <HomeIcon/> {scroll ? '' : 'Inicio'}
            </p>
            <ul className={`flex gap-10 ${scroll ? 'flex-col gap-5 z-30' : ''}`}>
              <Item itemNames={itemNavbarData["ITEMS"]} scroll={scroll}/>
            </ul>
          </nav>
      </header>
      <Socials/>
    </>
  )
}
