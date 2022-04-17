import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './comphonents/Home/Home';
import Login from './comphonents/Login/Login';
import SignUp from './comphonents/SignUp/SignUp';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
