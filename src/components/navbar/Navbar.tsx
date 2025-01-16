import { Item } from "./Item"
import {itemNavbarData} from "../../config/itemNavbarData";
import { Socials } from "../socials/Socials";

export const Navbar = () => {
  return (
    <>
      <header className="h-[120px] mb-40">
          <nav className="bg-black backdrop-blur-md bg-opacity-20 rounded-[50px] border border-[#552D8A]
          flex justify-between items-center h-full pr-10 pl-10
          "
          >
            <p className="text-button">
              Luisvill
            </p>
            <ul className="flex gap-10">
              <Item itemNames={itemNavbarData["ITEMS"]}/>
            </ul>
          </nav>
      </header>
      <Socials/>
    </>
  )
}
