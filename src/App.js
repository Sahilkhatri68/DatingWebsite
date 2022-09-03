import './App.css';
import Footer from './Components/Footer';
import FrontEnd from './Components/FrontEnd';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Subscription from './Components/Subscription';
import Profile from './Components/Profile';
import axios from 'axios';
import Slider from './Components/Slider/Slider';
import DatingSlider from './Components/DatingSlider/DatingSlider';
import LeftDrawer from './Components/LeftDrawer/LeftDrawer';

axios.defaults.withCredentials = true

function App() {
  return (
    <>

      {/* <Header /> */}

      <Routes>

        <Route path="/" exact element={<FrontEnd />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
        <Route path="/subscribe" exact element={<Subscription />}></Route>
        <Route path="/profile" exact element={<Profile />}></Route>
        <Route path="/slider" exact element={<Slider />}></Route>
        <Route path="/datingslider" exact element={<DatingSlider />}></Route>
        <Route path="/leftdrawer" exact element={<LeftDrawer />}></Route>
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
