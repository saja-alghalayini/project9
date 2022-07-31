import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import Userinfo from './users/UserInfo';
import UpdateInfo from './users/updateUser';
import About from './static/about';
import Contact from './static/contact';
import Adminlogin from './admin/AdminLogin';
import Dashboard from './admin/Dash';
import Auction from './admin/Auction';
import Home from './components/Home';
import Single from './singlepro';
import AllPro from './AllPro';
import LoginAndReg from "./LoginAndReg";

function App() {

  return (
    <> 
   <Home/>
    <BrowserRouter>
    <Routes>
    <Route path="/single/:id" element={<Single />}/>
      <Route path="/all" element={<AllPro />}/>
      <Route exact path='/user' element={<Userinfo />} />
      <Route path='/updateInfo' element={<UpdateInfo />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path="/loginA" element={<Adminlogin />} />
      <Route path="/auction" element={<Auction />} /> 
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="/login" element={<LoginAndReg />}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  </>

  );
}
export default App;

// import React from 'react';
// import CountdownTimer from './Component/CountdownTimer';
// import './App.css';

// export default function App() {
//   const THREE_DAYS_IN_MS = 0 * 24 * 60 * 60 * 1000;
//   const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
//   const NOW_IN_MS = new Date().getTime();

//   const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
//   const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;

//   return (
//     <div>
//       <h1>Countdown Timer</h1>

//       <h2>Expires after 3 days!!!</h2>
//       <CountdownTimer targetDate={dateTimeAfterThreeDays} />

//       <h2>Expires after 7 days!!!</h2>
//       <CountdownTimer targetDate={dateTimeAfterSevenDays} />
//     </div>
//   );
// }
