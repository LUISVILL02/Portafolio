import { Item } from "./Item"
import {itemNavbarData} from "../../config/itemNavbarData";
import { Socials } from "../socials/Socials";
import { HomeIcon } from '../../components/icons/HomeIcon';
import { useNavbar } from "../../hooks/useNavbar";
import { useEffect, useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import { MenuIcon } from "../icons/MenuIcon";
import { Icon } from "../icons/Icon";

export const Navbar = () => {

  const [showMen, setShowMen] = useState(false);

  const { scroll } = useNavbar();

  useEffect(() => {
    (showMen) 
    ? document.body.classList.add("no-scroll") 
    : document.body.classList.remove("no-scroll");
  }, [showMen])


  return (
    <>
      <header className="mb-40 2xl:h-[100px] 2xl:mb-32 xl:h-[80px] 3xl:h-[120px] lg:h-[60px]">
          <div onClick={() => setShowMen(!showMen)}
            className="fixed top-0 left-0 right-0 z-30 lg:hidden block bg-background-oval border border-[#552D8A]
            h-max p-3 items-center
          ">
            <MenuIcon className="w-[30px] h-[30px] cursor-pointer"/>
          </div>
          <div className={`fixed lg:hidden bg-purple-950 top-0 right-0 md:left-[70%] left-[50%] z-50
             w-full h-full transition-all
              shadow-[-500px_0px_0px_180px_rgba(0,0,0,0.5)] before:absolute before:-left-[100%] before:top-0 before:bottom-0 before:right-0 
                before:bg-transparent
              ${showMen ? 'block' : 'hidden'} flex flex-col
              `}>
                <div className="absolute -left-10 w-[30px] h-[30px] text-center bg-red-300 cursor-pointer"
                  onClick={() => setShowMen(!showMen)}
                  ><CloseIcon clasName="w-[30px] h-[30px]"/>
                </div>
                <div className=" relative z-10">
                  <a href="#Home"
                    className="flex items-center gap-3 pt-6 pb-6 pl-3 pr-3">
                    <HomeIcon/> <span>Inicio</span>
                  </a>
                  <Item itemNames={itemNavbarData["ITEMS"]} scroll={scroll} showMen={showMen}/>
                </div>
          </div>
          <nav className={` ${scroll ? `fixed z-20 top-[25%] right-0 flex-col h-max w-[100px] p-4 gap-5 
                        transform transition-transform duration-500 ease-in hidden lg:flex` 
                        : 
                         `bg-black backdrop-blur-md bg-opacity-20 rounded-[50px] border border-[#552D8A] 
                          justify-between items-center h-full pr-10 pl-10 z-20 hidden lg:flex lg:justify-between` 
                      } `}
          >
            <p className={`flex items-center gap-2 
                3xl:text-button 2xl:text-button-2xl xl:text-button-xl text-button-lg 
                justify-center cursor-pointer`
              }
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Icon className="lg:w-[70px] lg:h-[70px]"/> {scroll ? '' : 
              <span className="3xl:block 2xl:block xl:block lg:block">Inicio</span>}
            </p>
            <ul className={`flex gap-10 ${scroll ? 'flex-col gap-5 P-5 items-center' : '2xl:gap-3 xl:gap-3 lg:gap-0'}`}>
              <Item itemNames={itemNavbarData["ITEMS"]} scroll={scroll}/>
            </ul>
          </nav>
      </header>
      <Socials/>
    </>
  )
}
