import React  from 'react'
import Navbar from '../../Navbar/Navbar'
import AddBlog from '../../Addblog'
import axios from 'axios'
import {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../style.css'
import { baseurl } from '../../helper/baseurl'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const notify = ()=> {
  
    toast.success('hkb', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    }


function Login() {
  const navigate = useNavigate()

  const [UserName  , setUserName ] = useState("") 
  const [Password, setPassword] = useState('')
  const [Userid, setUserid] = useState('')

  async function Login (e) {
      e.preventDefault()
     
      await axios.post( baseurl+ 'Loginmodel' , {
          UserName : UserName,
          UserPassword: Password,
          Userid : Userid ,
          

          
      }).then( res => {
        console.log(res);
      
      if(res.data. success == true )  {
        console.log('Success')
        
        console.log(res.data.userName)

        window.localStorage.setItem('isLogedin' , true)
        window.localStorage.setItem('userid' , res.data.id)
        window.localStorage.setItem('Name' , res.data.UserName)
        navigate ('/Addblog')
       

         } else { 
          console.log(' can"t Success') 
          
        }
    
   
        
      
        
      }
      
      )
    }


  return (
   
   <>
   
   <><div className='Backcolor'>
   
   <div style={{ marginTop:200,marginLeft:370 , width:'50%' , }}>
   
   <h1 className='mb-3' style={{ fontSize:90,marginLeft:160 , width:'70%', }}>LOG IN</h1>
      <div className="mb-3"    >
        <input type="text" onChange={(e)=> {setUserName(e.target.value);}} class="form-control" id="exampleFormControlInput1" placeholder="USER NAME" />
      </div>

      <div className="mb-3">
        <input type="Password" onChange={(e)=> {setPassword(e.target.value);}} class="form-control" id="exampleFormControlInput1" placeholder="USER PASSWORD" />
      </div>
      
      <button  onClick={e=>  Login(e)} style={{ marginLeft:160, width:'50%', }}  type="button" class="btn btn-warning">LOG IN</button>
    </div>
    
    </div> 
    

    </>
    <ToastContainer />
</>
  )
}

export default Login