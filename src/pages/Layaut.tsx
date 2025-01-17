import { Navbar } from "../components/navbar/Navbar"
import {Outlet} from "react-router";


export const Layaut = () => {
  return (
    <>
        <Navbar/>
        <main className="flex-col justify-items-center flex gap-y-20">
            <Outlet/>
        </main>
    </>
  )
}
