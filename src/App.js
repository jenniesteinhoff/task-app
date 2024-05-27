import './index.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Menu } from './components/Menu';
import { Header } from './components/Header';
import { Register } from './components/Register';
import { Login } from './components/Login';


function App() {
  return (
    <div className='container'>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
