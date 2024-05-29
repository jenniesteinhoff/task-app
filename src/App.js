import './index.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Header } from './components/Header';
import { Exit } from './components/Exit';
import { Help } from './components/Help';
import { CreateTask } from './components/CreateTask';
import { Menu } from './components/Menu';



function App() {
  return (
    <div className='container'>
    <BrowserRouter>
      <Header />
      <Routes>
        {/*routes created to link between .js files*/}
        <Route path='/' element={<Menu />} />
        <Route path='/createtask' element={<CreateTask />} />
        <Route path='/help' element={<Help />} />
        <Route path='/exit' element={<Exit />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
