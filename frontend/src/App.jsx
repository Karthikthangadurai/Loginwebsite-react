import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from './components/Login';
import Success from './components/Success';
import Fail from './components/Fail';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/success' element={<Success/>}></Route>
      <Route path='/fail' element={<Fail/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
