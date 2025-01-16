import { AboutMe } from "../aboutme/AboutMe"
import { Contact } from "../contact/Contact"
import { Present } from "../present/Present"
import { Project } from "../project/Project"
import { Skills } from "../skills/Skills"


export const Landing = () => {
  return (
    <>
      <Present/>
      <AboutMe/>
      <Project/>
      <Skills/>
      <Contact/>
    </>
  )
}
