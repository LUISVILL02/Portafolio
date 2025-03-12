import cvPdf from "../../assets/Luis-Angel-VIllamil-CV.pdf";
import { usePdfViewer } from "../../providers/PdfProvider";
import { Download } from "../icons/Download";
import { CloseIcon } from "../icons/CloseIcon"
import { useEffect, useState } from "react";


export const PdfViewer = () => {
  const [isClosing, setIsClosing] = useState(false);
  const { show, setShow } = usePdfViewer();

  const handleClose = () => {
    document.body.classList.remove("no-scroll");
    setIsClosing(true);
    setTimeout(() => {
      setShow(false);
      setIsClosing(false); 
    }, 500);
  };

  useEffect(() => {
    document.body.classList.add("no-scroll");
  }, [show]);

  if (!show) return null;

  return (
    <div className={`transition-opacity duration-1000 ease-in-out ${!isClosing ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
      fixed inset-0  w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-hidden`}>
        <iframe className={`rounded-md w-[80%] h-[90%] md:w-[50%] md:h-[90%] bg-white `}
          src={`${cvPdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
          title="Luis Angel Villamil CV"
          >  
        </iframe>
        <div className="absolute top-0 right-5 md:right-0 flex flex-row gap-2 p-2 items-center">  
          <button className="flex items-center justify-center  w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full bg-primary  hover:bg-primary-dark text-white font-bold transition-colors duration-300"
            onClick={handleClose}>
            <CloseIcon style={{width: "40px", height: "40px"}}/>
          </button>
          <a href={cvPdf} download={cvPdf} 
            className="flex flex-row gap-2 items-center bg-primary rounded-full p-4 lg:p-[10px] hover:bg-primary-dark text-white font-bold transition-colors duration-300"
          >
            <Download clasName="lg:w-[30px] lg:h-[40px] w-[15px] h-[15px]"/> Descargar
          </a>
        </div>
    </div>
  );
};