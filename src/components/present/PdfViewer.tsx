import cvPdf from "../../assets/Luis-Angel-VIllamil-CV.pdf";
import { usePdfViewer } from "../../providers/PdfProvider";
import { Download } from "../icons/Download";
import { CloseIcon } from "../icons/CloseIcon"


export const PdfViewer = () => {

  const { setShow } = usePdfViewer();

  const handleShow = () => {
    document.body.classList.remove("no-scroll");  
    setShow(false)
  }

  document.body.classList.add("no-scroll");

  return (
    <div className="fixed inset-0  w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-30 overflow-hidden">
        <iframe className="rounded-md w-[50%] h-[90%] bg-white"
          src={`${cvPdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
          title="Luis Angel Villamil CV"
          >  
        </iframe>
        <div className="absolute top-0 right-0 flex flex-row gap-2 p-2 items-center">  
          <button className="flex items-center justify-center  w-[80px] h-[80px] rounded-full bg-primary  hover:bg-primary-dark text-white font-bold transition-colors duration-300"
            onClick={handleShow}>
            <CloseIcon style={{width: "40px", height: "40px"}}/>
            </button>
            <a href={cvPdf} download={cvPdf} 
              className="flex flex-row gap-2 items-center bg-primary rounded-full p-5  hover:bg-primary-dark text-white font-bold transition-colors duration-300"
            >
              <Download style={{width: "40px", height: "40px"}}/> Descargar
            </a>
        </div>
    </div>
  );
};