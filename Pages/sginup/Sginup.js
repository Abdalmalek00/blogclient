import React , { useState } from 'react'
import axios from 'axios'
import { baseurl } from '../../helper/baseurl'
import { useNavigate } from 'react-router-dom'


function Sginup() {
    const navigate = useNavigate()

    const [UserName  , setUserName ] = useState("") 
    const [Password, setPassword] = useState('')
    const [Pawer  , setPawer ] = useState("")

    async function Sginupp (e) {
        e.preventDefault()

        await axios.post(baseurl + 'addnewuser' , {
            UserName : UserName,
            UserPassword: Password,
            Pawer : Pawer,

            
        }).then( res => {
            if(res){
                console.log(res.data.userName)

                window.localStorage.setItem('isLogedin' , true)
                window.localStorage.setItem('id' , res.data.id)
                window.localStorage.setItem('Name' , res.data.Name)

                navigate('/Showblog')



            }
        }).catch( err => {
            console.log(err)
        })

    }

  return (
    <>
        <div className='container' style={{ marginTop:200 , width:'70%', }}>
            <h2 style={{ textAlign:'center' }}>SGIN UP</h2>
        <div className="mb-3">
        <input onChange={ e => setUserName(e.target.value)  }  type="text" className="form-control"  placeholder="ENTER YOUR NAME" />
      </div>
      <div className="mb-3">
        <input  onChange={ e => setPassword(e.target.value) } type="password" className="form-control"  placeholder="ENTER YOUR PASSWORD" />
      </div>
      <div className="mb-3">
        <input onChange={ e => setPawer(e.target.value) }  className="form-control"  placeholder=" ENTER PAWER" />
      </div>
      <button onClick={ e => Sginupp(e) } className='btn btn-danger' > تسجيل حساب جديد  </button>
        </div>
    </>
  )
}

export default Sginup