import './App.css';
import UseState from './components/useState/UseState'
import UseStateForm from './components/useState/UseStateObject'
import UseEffectCounter from './components/useEffect/UseEffect'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
function App() {
  return (
   <Router>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/usestate-counter' element={<UseState/>}/>
      <Route path='/usestate-form' element={<UseStateForm/>}/>
      <Route path='/useeffect-counter' element={<UseEffectCounter/>}/>
    </Routes>
   </Router>
  );
}

export default App;
