

import './App.css'
import StateFullFrom from './From/StateFullFrom'
import SubmitFrom from './From/SubmitFrom'

function App() {


  return (
    <>
      <div>
        <h1 className='text-red-500 text-4xl' >React Core concept </h1>
      </div>
      <section>
        <div>
          <SubmitFrom></SubmitFrom>
        </div>
        <div>
          <StateFullFrom></StateFullFrom>
        </div>

      </section>
    </>
  )
}

export default App
