import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Single(){
  const params = useParams(); 
  

 
  const [inf,setInf]=useState('[]');
  const [newPrice, setNewP]=useState('');
  const [submit, setSubmit]=useState('');
  const [auc, setAuc]=useState('');
  const [maxPrice, setMaxPrice]=useState('');
  const [userSold, setUserSold]=useState('');
  // const [timer, setTimer]=useState(true);

let user_id = sessionStorage.getItem("user_info");
  const gitData=()=>{
    axios.get(`http://localhost/project-9/porject9/php/singlePro.php?id=`+params.id)
    .then((res)=>{
  
    setInf(res.data);
    })
    console.log(auc);
   }


   const getauc=()=>{
    axios.get(`http://localhost/project-9/porject9/php/numberAuc.php?pro_id=`+params.id)
    .then((res)=>{
  
    setAuc(res.data);
    })
   }
 


 
   const gitMix=()=>{
    axios.get(`http://localhost/project-9/porject9/php/maxPrice.php?pro_id=`+params.id)
    .then((res)=>{

    setMaxPrice(res.data[0]);
   
    })
   }
 
 
    
 


  const date1 =  new Date();
   const date11  =  date1.getTime();

  const date2 =  new Date(inf.end_date);
  const date22  =  date2.getTime();

  let max_user=maxPrice.user_id;
  console.log(max_user, 'max');
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
   console.log(daydiff, 'roaa'); 

  useEffect(()=>{
    // setTimer(true);
    document.getElementById('win').style.display="none";
    if(daydiff>0){
      // setTimer(true);
      getauc();
      gitMix();
      if (maxPrice.user_id == user_id){
        document.getElementById('heigh').style.display="block";
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
  }
  else if (daydiff<=0)
  {
    if (maxPrice.user_id == user_id)
    {
      document.getElementById('win').style.display="block";
    }
    document.getElementById('bid').style.display='none';
    document.getElementById('end').style.display='block';

    axios.post('http://localhost/project-9/porject9/php/updateSold.php?id='+params.id+'&user_id='+max_user)
    .then(() => {
        console.log("sold!", submit,params.id); 
    });
    // axios.post('http://localhost/project-9/porject9/php/insertSoldPro.php?user_id='+user_id+'&price='+inf.min_price+'&pro_id='+params.id)
    // .then(() => {
    //     console.log("add!", submit,params.id); 
    // });
    // setTimer(false);
  }
    gitMix();
    gitData();
   },[submit,inf.min_price,newPrice]);


   


  const handelPrice=(event)=>
  {
    event.preventDefault();
    document.getElementById('er').style.display="none";
    setSubmit(newPrice);
    
    if(parseInt(inf.min_price) < parseInt(submit))
    {
      document.getElementById('er').style.display="none";
    } 
    else
    {
      document.getElementById('er').style.display="block";
    }
  }

 
    return(
      <>
      

      <div className="container-fluid">
        <div className="row">

          <Navbar />
        </div>
  {/* Features Start */}
  <div className="container-fluid bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 mt-5 py-5 pr-lg-5">
          <h6 className="text-primary font-weight-normal text-uppercase mb-3">
            Why Choose Us?
          </h6>
          <h1 className="mb-4 section-title">
            25+ Years Experience In The Interior Design Industry
          </h1>
          <p className="mb-4">
            Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore
            sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor
            sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo
          </p>
          <ul className="list-inline">
            <li>
              <h5>
                <i className="far fa-check-square text-primary mr-3" />
                25+ Years Experience
              </h5>
            </li>
            <li>
              <h5>
                <i className="far fa-check-square text-primary mr-3" />
                Best Interior Design
              </h5>
            </li>
            <li>
              <h5>
                <i className="far fa-check-square text-primary mr-3" />
                Customer Satisfaction
              </h5>
            </li>
          </ul>
          <a href="" className="btn btn-primary mt-3 py-2 px-4">
            View More
          </a>
        </div>
        <div className="col-lg-5">
          <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
            <img className="h-100" src="img/feature.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features End */}





        <div className="container mt-5 mb-5">
  <div className="row d-flex justify-content-center">
  <div class="alert alert-success" role="alert" id='heigh' style={{display:'none'}}>
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
                <p> this auction will end in {inf.end_date} </p>
              </div>
              <p className="about">
                {inf.description}
              </p>
              <div class="alert alert-danger" role="alert" id='end' style={{display:'none'}}>
              This auction has ended!
</div>
              <div className="cart mt-4 align-items-center" id ='bid'>
              
                <input className="btn  mr-2 px-4" placeholder='Bit Now' type={'number'} onChange={(e) => setNewP(e.target.value)}/>
                {user_id ? <button type="" className="btn btn-block " style={{backgroundColor: '#FDBE33',}} onClick={handelPrice}>Bid Now</button>: <><button type="" className="btn btn-block " style={{backgroundColor: '#FDBE33',}} disabled>Bid Now</button> <span style={{color: 'red'}}>Login to Bid</span></>}
                <br></br>
                <small style={{color:'red', display:'none'}} id='er'>Your bid should be more than the price</small>
                 
              
              
              </div>
              <div class="alert alert-success" role="alert" id='win' style={{display:'none'}}>
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
</div>
      <div className="row mt-2">
        <Footer />
      </div>
</>
    )
}

export default Single;