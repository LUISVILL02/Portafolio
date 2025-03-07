
import { CSSProperties } from "react"

export const Css = (props: { className?: string; style?: CSSProperties | undefined }) => {
  return (
    <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style} className={`${props.className} xl:w-[69px] xl:h-[69px] lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px]:`}>
    <path d="M4.3125 0L9.81094 62.1L34.5 69L59.1804 62.1043L64.6875 0H4.3125Z" fill="white"/>
    <path d="M52.9317 20.3076L52.2373 28.1089L50.1415 51.4956L34.5 55.821L34.4871 55.8254L18.8543 51.4956L17.7632 39.2654H25.4222L25.9915 45.609L34.4914 47.9033L34.4957 47.899L43.0086 45.6047L44.1686 35.0348L17.3966 35.1081L16.6376 27.8804L44.8112 27.5483L45.3805 19.8117L15.883 19.8936L15.387 12.696H53.613L52.9317 20.3076Z" fill="#1B1426"/>
    </svg>
  )
}
