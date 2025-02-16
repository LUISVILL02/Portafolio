import { Download  } from '../../components/icons/Download'
import { usePdfViewer } from '../../providers/PdfProvider';

export const Cv = () => {
  const { setShow } = usePdfViewer();
  return (
    <div>
      <a 
      onClick={() => setShow(true)}
      className={`blink-shadow-opacity bg-primary-dark p-2  rounded-full cursor-pointer
        flex gap-2 justify-center items-center z-20 absolute
        3xl:w-[89px] 3xl:h-[89px] 3xl:right-32 3xl:bottom-[-5%] 
        2xl:w-[60px] 2xl:h-[60px] 2xl:bottom-10 2xl:right-20 
        xl:right-10 xl:bottom-[-5%] xl:w-[60px] xl:h-[60px]
        `}
      style={{ 
        animation: "floating 3s ease-in-out infinite, blink-shadow-opacity 3s ease-in-out infinite",
         }}
      >
        <Download style={{}}/>
        <p>CV</p>
      </a>
    </div>
  )
}
