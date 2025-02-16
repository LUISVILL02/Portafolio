import { createContext, useContext, useState } from "react";

const PdfViewerContext = createContext({
  show: false,
  // @ts-ignore
  setShow: (show: boolean) => {}
});

export const PdfViewerProvider = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(false);

  return (
    <PdfViewerContext.Provider value={{ show, setShow }}>
      {children}
    </PdfViewerContext.Provider>
  );
};

export const usePdfViewer = () => useContext(PdfViewerContext);