import React from 'react'

 const Navbar = ()=>{
    return (
      <div>
        
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsMonkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu">
        
            <li><a className="dropdown-item" href="/">business</a></li>
            <li><a className="dropdown-item" href="/">entertainment</a></li>
            <li><a className="dropdown-item" href="/">general</a></li>
            <li><a className="dropdown-item" href="/">health</a></li>
            <li><a className="dropdown-item" href="/">science</a></li>
            <li><a className="dropdown-item" href="/">sports</a></li>
            <li><a className="dropdown-item" href="/">technology</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search"> 
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

      </div>
    )
  
}
export default Navbar
