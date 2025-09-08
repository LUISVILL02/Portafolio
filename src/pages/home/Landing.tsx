import { PdfViewer } from "../../components/present/PdfViewer"
import { usePdfViewer } from "../../providers/PdfProvider"
import { AboutMe } from "../aboutme/AboutMe"
import { Contact } from "../contact/Contact"
import { Experience } from "../experience/Experience"
import { Present } from "../present/Present"
import { Project } from "../project/Project"
import { Skills } from "../skills/Skills"


export const Landing = () => {
  const { show } = usePdfViewer();
  return (
    <>
      <Present/>
      <AboutMe/>
      <Project/>
      <Experience/>
      <Skills/>
      <Contact/>
      {show && <PdfViewer/>}
    </>
  )
}
