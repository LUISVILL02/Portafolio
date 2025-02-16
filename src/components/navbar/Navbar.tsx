import { Item } from "./Item"
import {itemNavbarData} from "../../config/itemNavbarData";
import { Socials } from "../socials/Socials";
import { HomeIcon } from '../../components/icons/HomeIcon';
import { useNavbar } from "../../hooks/useNavbar";

export const Navbar = () => {

  const { scroll } = useNavbar();

  return (
    <>
      <header className="mb-40 2xl:h-[100px] 2xl:mb-32 xl:h-[80px] 3xl:h-[120px]">
          <nav className={` ${scroll ? `fixed z-20 top-[25%] right-0 flex flex-col h-max w-[100px] p-4 gap-5 
                        transform transition-transform duration-500 ease-in` 
                        : 
                        `bg-black backdrop-blur-md bg-opacity-20 rounded-[50px] border border-[#552D8A] 
                        flex justify-between items-center h-full pr-10 pl-10 z-20`
                      } `}
          >
            <p className={`flex items-center gap-2 
                3xl:text-button 2xl:text-button-2xl xl:text-button-xl 
                justify-center cursor-pointer`
              }
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <HomeIcon className="3xl:w-[39px] 2xl:w-[32px] xl:w-[25px]"/> {scroll ? '' : 'Inicio'}
            </p>
            <ul className={`flex gap-10 ${scroll ? 'flex-col gap-5 P-5 items-center' : '2xl:gap-3 xl:gap-3'}`}>
              <Item itemNames={itemNavbarData["ITEMS"]} scroll={scroll}/>
            </ul>
          </nav>
      </header>
      <Socials/>
    </>
  )
}
