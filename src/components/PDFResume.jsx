"use client";
// import { Worker } from "next/dist/compiled/jest-worker";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

// Start worker
pdfjs.GlobalWorkerOptions.workerSrc = "/pdfworker.min.mjs";
export const PDFResume = () => {
    return (
        <div>
            <h2>Resume</h2>
            <Resume />
        </div>
    );
};

function Resume() {
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    return (
        <div className="pdf-container">
            <Document
                file="https://lucasresume.s3.us-east-2.amazonaws.com/Lucas+SWE+Resume+Template.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={1} />
            </Document>
        </div>
    );
}
