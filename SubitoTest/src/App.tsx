import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1 className="boldLeft">
          Seminar <span className='colorBlue'>Registration</span>
        </h1>
      </header>
      <main>
        <div className="container">
          <Step1 />
          <Step2 />
          <Step3 />
        </div>
      </main>
    </>
  )
}

export default App
