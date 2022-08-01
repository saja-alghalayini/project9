import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import Userinfo from './users/UserInfo';
import UpdateInfo from './users/updateUser';
import About from './static/about';
import Contact from './static/contact';
import Adminlogin from './admin/AdminLogin';
import Dashboard from './admin/Dash';
import Auction from './admin/Auction';
import Home from './components/Home';
import Single from './pro/singlepro';
import AllPro from './pro/AllPro';
// import LoginAndReg from "./LoginAndReg";
import Login from './Login';
import Signup from './reg';
import Uploader from '../src/components/Uploader/Uploader'
import Navbar from './components/Navbar';

function App() {

  return (
    <> 

    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/single/:id" element={<Single />}/>
      <Route path="/all" element={<AllPro />}/>
      <Route exact path='/user' element={<Userinfo />} />
      <Route path='/updateInfo' element={<UpdateInfo />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path="/loginA" element={<Adminlogin />} />
      <Route path="/auction" element={<Auction />} /> 
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Signup/>}/>
      {/* <Route path="/login" element={<LoginAndReg />}/> */}
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
//   const SEVEN_DAYS_IN_MS = 7 * 13 * 60 * 60 * 1000;
//   const NOW_IN_MS = new Date().getTime();

//   const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
//   const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;
//   function dhm(t){
//     var cd = 24 * 60 * 60 * 1000,
//         ch = 60 * 60 * 1000,
//         d = Math.floor(t / cd),
//         h = Math.floor( (t - d * cd) / ch),
//         m = Math.round( (t - d * cd - h * ch) / 60000),
//         pad = function(n){ return n < 10 ? '0' + n : n; };
//   if( m === 60 ){
//     h++;
//     m = 0;
//   }
//   if( h === 24 ){
//     d++;
//     h = 0;
//   }
//   return [d, pad(h), pad(m)].join(':');
// }
// console.log(dhm(dateTimeAfterSevenDays-NOW_IN_MS));
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
