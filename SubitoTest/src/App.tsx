import './App.css'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'

function App() {

  return (
    <>
      <h1 className="boldLeft">
        Seminar <span className='colorBlue'>Registration</span>
      </h1>
      <div className="container">
        <Step1 />
        <Step2 />
        <Step3 />
      </div>
    </>
  )
}

export default App
