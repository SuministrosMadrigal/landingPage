import './App.css'
import BROCHURE from "../public/brochure.pdf";


function App() {
  const PDFFILE = `${BROCHURE}#toolbar=0&navpanes=0&scrollbar=0`

  return (
    <>
      <div className='bg-black w-full min-h-screen'>
        <iframe
          className='h-screen'
          src={PDFFILE}
          width="100%"
          style={{ border: 'none' }}
        />
      </div>
    </>
  )
}

export default App
