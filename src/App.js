import React from "react";
import PdfViewer from "./PdfViewer";
import PDF from "./teste.pdf";
import "./App.css";

const App = () => (
  <div className="content">
    <h1>Exemplo PDF Viewer</h1>
    <PdfViewer pdf={PDF} />
  </div>
);

export default App;