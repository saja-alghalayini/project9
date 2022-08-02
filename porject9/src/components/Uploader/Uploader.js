import React, {useState,useRef} from 'react';
import '../../App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Uploader.css'
// import './ff.js/index.js'
import Navbar from "../../components/Navbar";       
import Footer from "../../components/Footer";



function Uploader() {
    const [data, setdata] = useState('');
    const [response, setresponse] = useState('')

    const [name, setname] = useState('');
    
    const [desc, setdesc] = useState('');

    const [price, setprice]= useState('');

    const   retriver= async ()=>{
        var xhr=new XMLHttpRequest();
        xhr.open('POST','http://localhost/project-9/porject9/php/upload.php',true);
        xhr.setRequestHeader('Content-type',"application/x-www-form-urlencoded");
        xhr.onload=function(){

           setdata(JSON.parse(this.responseText));
 
        };
         xhr.send(`fetch`);
    };

    const selectedFile=useRef();

    const uploader=async()=>{
        if(price===''){
            setresponse('Please select a starting price ')
        }


        if(desc===''){
            setresponse('Description cannot be empty');
        }
        if(name===''){
            setresponse('name input cannot be empty');
        }
        if (selectedFile.current.files.length===0){
            setresponse(' please choose an image');
        }else{
            const formData =new FormData();
            formData.append('picture',selectedFile.current.files[0]);
            formData.append('name', name);
            formData.append('desc', desc);
            formData.append('price', price);

            var xhr = new XMLHttpRequest();
             xhr.open('POST','http://localhost/project-9/porject9/php/upload.php',true);
             
            xhr.onload=function(){
               if(this.responseText==='success'){
                retriver();
               }
                console.log(this.responseText);;
            }

             xhr.send(formData);
        }




        if(selectedFile.current.files.length===0 && name==='' ){
            setresponse('Please fill in all fields');
        }
        // console.log(name);
        // console.log(selectedFile.current.files);
    }
  return (
    <>

    <Navbar/>
<div>
        
        <div className="container">
            <div className="row ">
                
       
    <p className='fs-3  text-danger'>{response}</p>
<form action="" id='Form'>


<label htmlFor="name">Name of your product</label>
<input type="text" name="" id="name" className='form-control'  onChange={(e)=>setname(e.target.value)} />

 <label htmlFor="des" >Description</label>

<textarea name="" id="des" cols="30" className='form-control'    rows="10" onChange={(e)=>setdesc(e.target.value)}></textarea>

<label htmlFor="Cost">price of product</label>
<input type="number" name="Cost" id="" className='form-control'   onChange={(e)=>setprice(e.target.value)} /> 




<label htmlFor="img">image of product</label>
<input type="file" name="" id="img" className='form-control'    ref={selectedFile}/>
<button onClick={uploader}type='button' className="btn btn-primary form-control">Upload</button>


</form>






</div>
</div>
{/* ============================================================================================================ */}





















</div>

    {/* <div>
    {data.map((item)=>{
        return(
            <div className="card">
                <img src=
                {'../.images/${item.img}'} alt="" />
                <p>{item.name}</p>
            </div>
        );
    })}; 
    </div> */}

<Footer/>

    </>
  );
}

export default Uploader