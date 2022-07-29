import {BrowserRouter, Route, } from 'react-router-dom';
import Home from './componentes/Home';
import {Routes} from 'react-router-dom'
import CharacterCreate from './componentes/CharacterCreate'



function App() {
 
  return (
    <BrowserRouter>
    <div>
    <Routes>
      <Route  path = '/' element={<Home/>} />
      <Route path='/characters' element={<CharacterCreate/>} />
    </Routes>
    </div>
    </BrowserRouter>

  )
}

export default App;
