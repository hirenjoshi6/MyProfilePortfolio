import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfFile from "../../Assets/resume.pdf"; // Import as a file (important!)

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function MyPDFViewer() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdf, setPdf] = useState(null); // Store the PDF data

  useEffect(() => {
    const loadPDF = async () => {
      try {
        const response = await fetch(pdfFile); // Fetch the PDF
        const arrayBuffer = await response.arrayBuffer(); // Get the ArrayBuffer
        setPdf(arrayBuffer); // Set the PDF data in state
      } catch (error) {
        console.error("Error loading PDF:", error);
        // Handle the error, e.g., display an error message
      }
    };

    loadPDF();
    setWidth(window.innerWidth); // Set width after PDF is loaded
  }, []); // Empty dependency array ensures this runs only once


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(newPage) {
    setPageNumber(newPage);
  }

  function nextPage() {
    changePage(Math.min(pageNumber + 1, numPages)); // Ensure pageNumber doesn't exceed numPages
  }

  function prevPage() {
    changePage(Math.max(pageNumber - 1, 1)); // Ensure pageNumber doesn't go below 1
  }

  return (
    <div>
      {pdf && ( // Conditionally render Document after PDF is loaded
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} className="d-flex justify-content-center">
          <Page pageNumber={pageNumber} scale={width > 786 ? 2 : 0.6} />
        </Document>
      )}
      {!pdf && <p>Loading PDF...</p>} {/* Display loading message */}
      {/* <div>
        <button onClick={prevPage} disabled={pageNumber <= 1 || !numPages}> 
          Previous
        </button>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        <button onClick={nextPage} disabled={pageNumber >= numPages || !numPages}> 
          Next
        </button>
      </div> */}
    </div>
  );
}

export default MyPDFViewer;