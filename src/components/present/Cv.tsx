import { Download  } from '../../components/icons/Download'
import { usePdfViewer } from '../../providers/PdfProvider';

export const Cv = () => {
  const { setShow } = usePdfViewer();
  return (
    <div>
      <a 
      onClick={() => setShow(true)}
      className={` bg-primary-dark hover:bg-primary p-2  rounded-full cursor-pointer
        flex gap-2 justify-center items-center z-20 absolute
        3xl:w-[89px] 3xl:h-[89px] 3xl:right-32 3xl:bottom-[-5%] 
        2xl:w-[60px] 2xl:h-[60px] 2xl:bottom-0 2xl:right-20 
        xl:right-10 xl:bottom-[-5%] xl:w-[60px] xl:h-[60px]
        lg:w-[50px] lg:h-[50px] lg:bottom-0 lg:right-10
        md:w-[50px] md:h-[50px] md:right-32 md:bottom-0
        w-[60px] h-[60px] -bottom-10 right-36
        `}
      style={{ 
        animation: "floating 3s ease-in-out infinite, blink-shadow-opacity 3s ease-in-out infinite",
         }}
      >
        <Download clasName='md:w-[20px]'/>
        <p className='xl:text-[15px] lg:text-[10px] md:text-[10px]'>CV</p>
      </a>
    </div>
  )
}
