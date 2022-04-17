import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Home from './comphonents/Home/Home';
import Login from './comphonents/Login/Login';
import SignUp from './comphonents/SignUp/SignUp';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
import RequireAuth from './comphonents/RequireAuth/RequireAuth';
import CheckOut from './comphonents/CheckOut/CheckOut';
import AboutMe from './comphonents/AboutMe/AboutMe';
import Blog from './comphonents/Blog/Blog';
import Notfound from './comphonents/NotFound/Notfound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Toaster />
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about-me' element={<AboutMe></AboutMe>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/checkout' element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }>
            
          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<Notfound></Notfound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
