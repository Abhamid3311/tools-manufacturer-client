import './App.css';
import Navbar from './Pages/SharedPage/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/SharedPage/NotFound/NotFound';
import Dashboard from './Pages/Page/Dashboard/Dashboard';
import MyPortfolio from './Pages/Page/MyPortfolio/MyPortfolio';
import Blogs from './Pages/Page/Blogs/Blogs';
import SignUp from './Pages/SharedPage/Login/SignUp';
import Login from './Pages/SharedPage/Login/Login';
import Footer from './Pages/SharedPage/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
