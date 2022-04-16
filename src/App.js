import './App.css';
import Home from './Home/Home';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
    </div>
  );
}

export default App;
