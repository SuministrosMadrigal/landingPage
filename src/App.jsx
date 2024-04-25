import './App.css'
import BROCHURE from "../public/brochure.pdf";

import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function App() {
  const PDFFILE = `${BROCHURE}#toolbar=0&navpanes=0&scrollbar=0`

  return (
    <>
      {/* <div className='bg-black w-full min-h-screen'>
        <iframe
          className='h-screen'
          src={PDFFILE}
          width="100%"
          style={{ border: 'none' }}
        />
      </div> */}

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div className='w-full min-h-screen'>
          <Viewer fileUrl={PDFFILE} />

        </div>
      </Worker>
    </>
  )
}

export default App
