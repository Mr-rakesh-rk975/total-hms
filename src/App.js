
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Homepage from './Pages/Home/Homepage';
import Blogpage from './Pages/Blog/Blogpage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Blogpage' element={<Blogpage/>}/>
      </Routes>
      
      </BrowserRouter>

     
    </div>
  );
}

export default App;
