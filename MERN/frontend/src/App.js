import {Browser, Routes, Route, BrowserRouter} from 'react-router-dom';

//pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-white text-gray-900 w-full dark:bg-gray-900 dark:text-white">
      <BrowserRouter>
      {/* NavBAr inside the BrowserRouter : Nav uses LINK */}
      <Navbar/>

      <div className='pages'>

        <Routes>
          <Route 
            path='/'
            element={<Home/>}
          />
        </Routes>
        
      </div>
           
      </BrowserRouter>
    </div>
  );
}

export default App;
