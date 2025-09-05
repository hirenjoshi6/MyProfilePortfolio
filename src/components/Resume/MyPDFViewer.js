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
      <div style={{ position: "relative" }}>
        {pdf && (
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} className="d-flex justify-content-center">
            <Page pageNumber={pageNumber} scale={width > 786 ? 2 : 0.6} />
          </Document>
        )}
        {!pdf && <p>Loading PDF...</p>}

        {/* Floating Previous Button */}
        <button
          onClick={prevPage}
          disabled={pageNumber <= 1 || !numPages}
          style={{
            position: "fixed",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1000,
            borderRadius: "50%",
            padding: "16px",
            background: "#8a49a862",
            color: "#fff",
            border: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            cursor: pageNumber <= 1 || !numPages ? "not-allowed" : "pointer",
          }}
          aria-label="Previous Page"
        >
          &#8592;
        </button>

        {/* Floating Next Button */}
        <button
          onClick={nextPage}
          disabled={pageNumber >= numPages || !numPages}
          style={{
            position: "fixed",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1000,
            borderRadius: "50%",
            padding: "16px",
            background: "#8a49a862",
            color: "#fff",
            border: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            cursor: pageNumber >= numPages || !numPages ? "not-allowed" : "pointer",
          }}
          aria-label="Next Page"
        >
          &#8594;
        </button>

        {/* Page Info */}
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <span>
            Page {pageNumber} of {numPages}
          </span>
        </div>
      </div>
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