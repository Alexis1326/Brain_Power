import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Start from "./pages/Start"
import Option from "./pages/Option"


import Clean from './pages/Clean'
import Gainers from './pages/Gainers'
import Services from './pages/Services'
import Proteins from './pages/Proteins'
import Supplements from './pages/Supplements'

function App() {

  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Start/>
          <Routes>
            <Route path='/' element={<Option/>}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  )
}

export default App
