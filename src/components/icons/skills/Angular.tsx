import { CSSProperties } from "react"

export const Angular = (props: { className?: string; style?: CSSProperties | undefined }) => {
  return (
    <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style} className={`${props.className} xl:w-[69px] xl:h-[69px] lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px]:`}>
    <path d="M59.5072 52.3577L64.2084 11.1276L33.5 0L2.79169 11.1276L7.49285 52.3577L33.5 67L59.5072 52.3577ZM21.4735 51.1182H14.2766L33.5 7.40071L52.7402 51.1154H45.5572L41.6852 41.3334H25.3456L21.4735 51.1182Z" fill="white"/>
    <path d="M27.8692 35.3091H39.1308L33.5 21.6104L27.8692 35.3091Z" fill="white"/>
    </svg>
  )
}