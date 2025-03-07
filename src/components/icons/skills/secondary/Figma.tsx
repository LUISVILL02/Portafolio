
import { CSSProperties } from "react"

export const Figma = (props: { className?: string; style?: CSSProperties | undefined }) => {
  return (
    <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style} className={`${props.className} xl:w-[69px] xl:h-[69px] md:w-[35px] md:h-[35px]`}>
    <path d="M23 69C29.348 69 34.5 63.848 34.5 57.5V46H23C16.652 46 11.5 51.152 11.5 57.5C11.5 63.848 16.652 69 23 69Z" fill="#D9D9D9"/>
    <path d="M11.5 34.5C11.5 28.152 16.652 23 23 23H34.5V46H23C16.652 46 11.5 40.848 11.5 34.5Z" fill="#B8B8B8"/>
    <path d="M11.5 11.5C11.5 5.152 16.652 0 23 0H34.5V23H23C16.652 23 11.5 17.848 11.5 11.5Z" fill="white"/>
    <path d="M34.5 0H46C52.348 0 57.5 5.152 57.5 11.5C57.5 17.848 52.348 23 46 23H34.5V0Z" fill="#B1B1B1"/>
    <path d="M57.5 34.5C57.5 40.848 52.348 46 46 46C39.652 46 34.5 40.848 34.5 34.5C34.5 28.152 39.652 23 46 23C52.348 23 57.5 28.152 57.5 34.5Z" fill="#D2D3D4"/>
    </svg>
  )
}


