import React, { Component, useState, useEffect } from "react";
import axios from 'axios';

function AllPro(){
    const [APIData, setAPIData] = useState([]);
    const [id, setId] = useState('');

    useEffect(() => {
        setId(id);
        
        axios.get(`http://localhost/tryproj9/php/readPro.php`)
        .then((response) => {
            setAPIData(response.data);
            // console.log(response.data,"res.data")
        })
    }, [id])

    console.log(APIData,"res.data")

    return(


 <>   
<div className="container mx-auto mt-4">
  <div className="row">
  {APIData.map(u => 
                  <div className="col-md-4">
                  <div className="card" >
              <img src={"img/"+u.img} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{u.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{u.min_price}</h6>
                <p className="card-text">{u.description}</p>
                   <a href={'/single/'+u.id}className="btn mr-2"><i className="fas fa-link"></i> Join Auction</a>
              
              </div>
              </div>
                </div> 
               )}


    
   
</div>
  </div>
  </>
    )
}
export default AllPro;