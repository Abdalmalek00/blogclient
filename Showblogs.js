import React , {useEffect , useState} from 'react'
import axios from 'axios'

function Showblog() {
    const [blogdata, setblogdata] = useState([])
   

    async function getblog () {
        
        await axios.get( 'http://localhost:3001/getblogs')
        .then( (res => {
            console.log(res.data.blogs)
            setblogdata(res.data.blogs)
        })).catch( err => {
            console.log(err)
        } )
     
    }
    useEffect(() => {
      getblog()
    },[])


  return (
    <>
    
    {

blogdata.map( (item, index) => {
            return (
            <> 
          
            <div className='form-floating mb-3' style={{ width:1600 ,background:'#77567A'}}  data-bs-theme="light"  key={index} >
                    <h1 className="card" style={{marginTop:20,background:'#C47AC0' }}>{item.Name}</h1>
                    <h1 className="card" style={{background:'#C47AC0' }}>{item.blogtitle}</h1>
                    
                    <p className="card" style={{marginTop:20 ,width:1600 , height:100 , fontSize:30 , background:'#DEBAC0'}} >{item.blogbody} </p>
                   
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1" style={{background:'#2F323A',color:'#EDF5FC'}}>تعديل</button>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1" style={{background:'#2F323A',color:'#EDF5FC'}}>حدف</button>
                    
                </div>
            </>
            )

})

}
 
  
  

  </>
  )

    }
export default Showblog