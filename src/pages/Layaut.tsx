import { Flash } from "../components/flashes/Flash";
import { Navbar } from "../components/navbar/Navbar"
import {Outlet} from "react-router";
import { PdfViewerProvider } from "../providers/PdfProvider";


export const Layaut = () => {
  
  return (
    <>
    <PdfViewerProvider>
        <Navbar/>
        <main className="flex-col justify-items-center flex gap-y-20">
            <Outlet/>
        </main>
        <Flash/>
    </PdfViewerProvider>
    </>
  )
}
