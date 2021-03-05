import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./PdfViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div>
      <div className="controls">
        <button  className="button" onClick={prevPage} disabled={pageNumber === 1}>
          Anterior
        </button>
        <button className="button" onClick={nextPage} disabled={pageNumber === numPages}>
          Próximo
        </button>
      </div>

      <Document
        file={"https://cors-anywhere.herokuapp.com/" + "http://biblioteca.cofen.gov.br/wp-content/uploads/2016/10/Nomes-de-medicamentos-com-grafia-ou-som-semelhantes-como-evitar-os-erros.pdf"}
        onLoadSuccess={onDocumentLoadSuccess}
        onContextMenu={(e) => e.preventDefault()}
        className="pdf-container"
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default PdfViewer;