import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function Single(){
  const params = useParams(); 
 

 
  const [inf,setInf]=useState('[]');
  const [newPrice, setNewP]=useState('');
  const [submit, setSubmit]=useState('');
  const [auc, setAuc]=useState('');
  const [maxPrice, setMaxPrice]=useState('');
  const [userSold, setUserSold]=useState('');
console.log(userSold, '11');
  const user_id =1;
  const gitData=()=>{
    axios.get(`http://localhost/project-9/porject9/php/singlePro.php?id=`+params.id)
    .then((res)=>{
    // console.log(res.data,'res.data')
    setInf(res.data);
    })
    console.log(auc);
   }


   const getauc=()=>{
    axios.get(`http://localhost/project-9/porject9/php/numberAuc.php?pro_id=`+params.id)
    .then((res)=>{
    // console.log(res.data,'res.data')
    setAuc(res.data);
    })
   }
 

  //  http://localhost/project-9/porject9/php/updateSold.php?id=3
 
   const gitMix=()=>{
    axios.get(`http://localhost/project-9/porject9/php/maxPrice.php?pro_id=`+params.id)
    .then((res)=>{
    // console.log(res.data,'res.data')
    setMaxPrice(res.data[0]);
    // console.log(maxPrice, 'roa');
    })
   }
 
 
    
  // http://localhost/project-9/porject9/php/readSold.php?id=3


  // const getUserSold=()=>{
  //   axios.get(`http://localhost/tryproj9/php/maxPrice.php?pro_id=`+params.id)
  //   .then((res)=>{
  //   // console.log(res.data,'res.data')
  //   userSold(res.data[0]);
  //   // console.log(maxPrice, 'roa');
  //   })
  //  }


  const date1 =  new Date();
   const date11  =  date1.getTime();
  //  console.log(date11, '1');
  const date2 =  new Date(inf.end_date);
  const date22  =  date2.getTime();

  // const date2 = new Date(inf.end_date);
  const Difference_In_Time = (date22 - date11);
 console.log(Difference_In_Time , 'gg');
  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
 
 var CurrentDay = new Date(); 
 CurrentDay=(CurrentDay.getTime());
  var a = CurrentDay-date22;
 var diff= a/ (1000 * 3600 * 24);
console.log(a, 'roa');

  
   var d1 = new Date(); 
   var d2 = new Date(inf.end_date);        
   var diff = d2.getTime() - d1.getTime();   
       
   var daydiff = diff / (1000 * 60 * 60 * 24); 
   console.log(daydiff, 'ibrahim '); 
// console.log((inf.start_date), 'roa2');
  useEffect(()=>{


    if(daydiff>0){
    getauc();

    gitMix();
    if (maxPrice.user_id == user_id){
      document.getElementById('win').style.display="block";
   
    }
    document.getElementById('end').style.display='none';
    document.getElementById('bid').style.display='block';
    if(parseInt(inf.min_price) < parseInt(submit))
    {
      document.getElementById('bid').style.display='block';
      let id =params.id
      axios.post('http://localhost/project-9/porject9/php/updatePrice.php?id='+params.id+'&price='+submit)
      .then(() => {
          console.log("success!", submit,params.id);
          
      });
      axios.post('http://localhost/project-9/porject9/php/addAuc.php?user_id='+user_id+'&price='+submit+'&pro_id='+id)
      .then(() => {
          console.log("yess!", submit,params.id);
          
      });
        console.log(inf.min_price);
        console.log('yes' );
     
        
    }
  
    
    
    

  }else{
 
    document.getElementById('bid').style.display='none';
    document.getElementById('end').style.display='block';

    // http://localhost/project-9/porject9/php/insertSoldPro.php?user_id=100&price=1&pro_id=3
    axios.post('http://localhost/project-9/porject9/php/updateSold.php?id='+params.id)
    .then(() => {
        console.log("sold!", submit,params.id);
        
    });

    axios.post('http://localhost/project-9/porject9/php/insertSoldPro.php?user_id='+user_id+'&price='+inf.min_price+'&pro_id='+params.id)
    .then(() => {
        console.log("add!", submit,params.id);
        
    });
    // getUserSold();
    
    if (maxPrice.user_id == user_id ){
      document.getElementById('user').style.display="block";
   
    }

  }

  gitMix();

    gitData()
    
   },[submit,inf.min_price])  ;


   


  const handelPrice=(event)=>{
    event.preventDefault();
    setSubmit(newPrice);
    document.getElementById('er').style.display="none";
    if(parseInt(inf.min_price) < parseInt(submit))
    {
      document.getElementById('er').style.display="none";
    } else{
      document.getElementById('er').style.display="block";
    }
    
 
   
}
    return(
        <div className="container mt-5 mb-5">
  <div className="row d-flex justify-content-center">
  <div class="alert alert-success" role="alert" id='win' style={{display:'none'}}>
  You're the highest bidder!
</div>
    <div className="col-md-10">
      <div className="card">
        <div className="row">
          <div className="col-md-6">
            <div className="images p-3">
              <div className="text-center p-4">
                
                <img
                  id="main-image"
                  src={"/img/"+inf.img}
                  width={250}
                />
              </div>
             
            </div>
          </div>
          <div className="col-md-6">
            <div className="product p-4">
              <div className="d-flex justify-content-between align-items-center">
                
                <i className="fa fa-shopping-cart text-muted" />
              </div>
              <div className="mt-4 mb-3">
               
                <h5 className="text-uppercase">{inf.name}</h5>
                <div className="price d-flex flex-row align-items-center">
                  
                  <span className="act-price">{inf.min_price}</span>
                
                 
                </div>
                <p>{auc} <code> [bids]</code></p>
              </div>
              <p className="about">
                {inf.description}
              </p>
              <div class="alert alert-danger" role="alert" id='end' style={{display:'none'}}>
              This auction has ended!
</div>
              <div className="cart mt-4 align-items-center" id ='bid'>
              
                <input className="btn  mr-2 px-4" placeholder='Bit Now' type={'number'} onChange={(e) => setNewP(e.target.value)}/>
                <button type="" className="btn btn-block " style={{backgroundColor: '#FDBE33'}} onClick={handelPrice}>Bid Now</button><br></br>
                <small style={{color:'red', display:'none'}} id='er'>Your bid should be more than the price</small>
                 
              
              
              </div>
              <div class="alert alert-success" role="alert" id='user' style={{display:'none'}}>
              Congratulations!! you won this auction
Go to your profile page to complete the purchase
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Single;