import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
