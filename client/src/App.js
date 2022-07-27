import {BrowserRouter, Route, } from 'react-router-dom';
import Home from './componentes/Home';
import {Routes} from 'react-router-dom'




function App() {
 
  return (
    <BrowserRouter>

    <div>
    <Routes>
      <Route  path = '/' element={<Home/>} />
    </Routes>
    </div>
    </BrowserRouter>

  )
}

export default App;
