import './App.css';
import Navbar from './Pages/SharedPage/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/SharedPage/NotFound/NotFound';
import Dashboard from './Pages/Page/Dashboard/Dashboard';

import Blogs from './Pages/Page/Blogs/Blogs';
import SignUp from './Pages/SharedPage/Login/SignUp';
import Login from './Pages/SharedPage/Login/Login';
import Footer from './Pages/SharedPage/Footer/Footer';
import ToolDetails from './Pages/Page/ToolDetails/ToolDetails';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Pages/SharedPage/RequireAuth';
import MyOrder from './Pages/Page/Dashboard/MyOrder';
import AddReview from './Pages/Page/Dashboard/AddReview';
import MyProfile from './Pages/Page/Dashboard/MyProfile';
import ManageAllOrder from './Pages/Page/Dashboard/ManageAllOrder';
import Alltools from './Pages/Page/AllTools/Alltools';
import About from './Pages/Page/About';
import Contact from './Pages/Page/Contact/Contact';
import AddTool from './Pages/Page/Dashboard/AddTool';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/alltools' element={<Alltools></Alltools>}></Route>
        <Route path='/tools' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/tools/:id' element={
          <RequireAuth>
            <ToolDetails></ToolDetails>
          </RequireAuth>}>
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard>
            </Dashboard>
          </RequireAuth>}>
          <Route index path='/dashboard' element={<MyOrder></MyOrder>}></Route>
          <Route path='/dashboard/addReview' element={<AddReview></AddReview>}></Route>
          <Route path='/dashboard/myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/manageOrder' element={<ManageAllOrder></ManageAllOrder>}></Route>
          <Route path='/dashboard/addTool' element={<AddTool></AddTool>}></Route>
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
