import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./userInfo.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Userinfo(props) {
//   const [id, setId] = useState('1');
  const [user, setUsers] = useState([]);
  useEffect(() => {
    // $id='1';
    axios.get(`http://localhost/project-9/api/API/userInfo.php`)//.$id
    //1&firstName=duaa&lastName=dua&email=dua@mail.com&phone=0771020304&password=asdf1234
      .then((res) => {
        //  console.log(res)
        const info = res.data;
        setUsers(info);
      });

  })

  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <Navbar/>
      </div>
      <div className="row">
      {user.map((info) =>
          <div className="centeruser mb-5" style={{ marginTop: '1%', marginBottom: '60%' }}>
            <div className="containerUser mb-5">
              <div className="left">
                <div className="photo">
                  <div className="circle"></div>
                  <div className="circle2"></div>
                  <img alt="user_photo" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png" />
                </div>
                <div className="title__contain">
                  <div className="username">{info.firstname + ' ' + info.lastname}</div>
                </div>
                <Link to="/updateInfo" className="updateinfo">&emsp;Update info</Link>
              </div>
              <div className="right">
                <div className="rightbox">
                  <span className="large">Email</span>
                  <span className="small">{info.email}</span>
                </div>
                <div className="rightbox">
                  <span className="large">Phone</span>
                  <span className="small">{info.phone}</span>
                </div><br />
                <div className="rightbox">
                  <span className="large">Address</span>
                  <span className="small">{info.address}</span>
                </div>
              </div>
            </div>
          </div>
      )}
      </div>
      <div className="row mt-2">
        <Footer/>
      </div>
      </div>
    </>
  );
}
export default Userinfo;