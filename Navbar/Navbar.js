import React , {useContext} from 'react'
import {Link} from 'react-router-dom'

 function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">القائمة</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
       
        
        <Link class="nav-link" to="/Sginup">SGIN UP</Link>
        <Link class="nav-link" to="/Login">LOG IN</Link>
        <Link class="nav-link" to="/Showblogs">SHOW BLOGS</Link>
        

        <div>
            {/*    */}
        </div>
     
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar