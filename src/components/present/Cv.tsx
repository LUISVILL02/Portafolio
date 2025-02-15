import { Download  } from '../../components/icons/Download'
import { usePdfViewer } from '../../providers/PdfProvider';

export const Cv = () => {
  const { setShow } = usePdfViewer();
  return (
    <div>
      <a 
      onClick={() => setShow(true)}
      className={`blink-shadow-opacity bg-primary-dark p-2 w-[89px] h-[89px] max-2xl:w-[60px] max-2xl:h-[60px] rounded-full 
        flex gap-2 justify-center items-center z-20 absolute right-32 bottom-[-5%] max-2xl:-bottom-10 max-2xl:right-20 cursor-pointer`}
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
