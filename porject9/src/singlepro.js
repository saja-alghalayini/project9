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

  const user_id =1;
  const gitData=()=>{
    axios.get(`http://localhost/tryproj9/php/singlePro.php?id=`+params.id)
    .then((res)=>{
    // console.log(res.data,'res.data')
    setInf(res.data);
    })
    console.log(auc);
   }


   const getauc=()=>{
    axios.get(`http://localhost/tryproj9/php/numberAuc.php?pro_id=`+params.id)
    .then((res)=>{
    // console.log(res.data,'res.data')
    setAuc(res.data);
    })
   }
 


 
   const gitMix=()=>{
    axios.get(`http://localhost/tryproj9/php/maxPrice.php?pro_id=`+params.id)
    .then((res)=>{
    // console.log(res.data,'res.data')
    setMaxPrice(res.data[0]);
    console.log(maxPrice, 'roa');
    })
   }
 


  useEffect(()=>{
    getauc();

  
    
    if(parseInt(inf.min_price) < parseInt(submit))
    {

      let id =params.id
      axios.post('http://localhost/tryproj9/php/updatePrice.php?id='+params.id+'&price='+submit)
      .then(() => {
          console.log("success!", submit,params.id);
          
      });
      axios.post('http://localhost/tryproj9/php/addAuc.php?user_id='+user_id+'&price='+submit+'&pro_id='+id)
      .then(() => {
          console.log("yess!", submit,params.id);
          
      });
        console.log(inf.min_price);
        console.log('yes' );
     
        
    }
  
    
    gitData()
    
    gitMix();
    if (maxPrice.user_id == user_id){
      document.getElementById('win').style.display="block";
   
    }
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
              
              <div className="cart mt-4 align-items-center">
              
                <input className="btn  mr-2 px-4" placeholder='Bit Now' type={'number'} onChange={(e) => setNewP(e.target.value)}/>
                <button type="" className="btn btn-block " style={{backgroundColor: '#FDBE33'}} onClick={handelPrice}>Bid Now</button><br></br>
                <small style={{color:'red', display:'none'}} id='er'>Your bid should be more than the price</small>
                 
              
                <i className="fa fa-heart text-muted" />
                <i className="fa fa-share-alt text-muted" />
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