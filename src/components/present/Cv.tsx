import { Download  } from '../../components/icons/Download'
import { usePdfViewer } from '../../providers/PdfProvider';

export const Cv = () => {
  const { setShow } = usePdfViewer();
  return (
    <div>
      <a 
      onClick={() => setShow(true)}
      className={`blink-shadow-opacity bg-primary-dark w-[89px] h-[89px] rounded-full flex gap-2 justify-center items-center z-20 absolute right-10 bottom-[-5%] cursor-pointer`}
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
