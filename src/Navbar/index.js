import React from 'react';
import "./styles.css"
function Navbar() {
  return (
    <div className='main'>
        <div className='logo'>
            <img src='https://wonted-react.vercel.app/assets/images/wonted-logo.png'></img>
        </div>
        <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light navv" style={{backgroundColor: "#000"}}>
        <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Pricing</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#">Benifits</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Chapter</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Author</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Achivements</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            
          </ul>
        </div>
      </div>
    
    </nav>
        </div>
    </div>
  );
}

export default Navbar;
