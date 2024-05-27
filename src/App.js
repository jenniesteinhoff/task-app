import './index.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Username } from './components/Username';
import { Header } from './components/Header';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { CreateTask } from './components/CreateTask';


function App() {
  return (
    <div className='container'>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Username />} />
        <Route path='/createtask' element={<CreateTask />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
