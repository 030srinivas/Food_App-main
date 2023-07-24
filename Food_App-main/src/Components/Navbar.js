import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import {Link} from "react-router-dom";


const Navbar = () =>{
    return(
        <>

        <nav className="navbar navbar-expand-md bg-warning  navbar-dark mt-1">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <h1 class="text-danger"><img src="https://th.bing.com/th/id/OIP.zsYd5p5bW_RXuZh66GZFEwAAAA?pid=ImgDet&rs=1" alt=" " className="log2"></img>
                    Foodies</h1>
                </Link>
                <div className="collapse navbar-collapse">

                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link className="navbar-brand" to="/">
                    Home
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link className="navbar-brand" to="/menu">
                    Menu
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link className="navbar-brand" to="/about">
                    About
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link className="navbar-brand" to="/contact">
                    Contact
                    </Link>
                    </li>
                </ul>

                <Link className="btn btn-success mx-2" to="/login">
                    Login
                </Link>

                <Link className="btn btn-primary mx-2" to="/signup">
                       Sign Up
                </Link>

                </div>
                </div>
        </nav>
        <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Menu</a></li>
    <li class="breadcrumb-item"><a href="#">About</a></li>
    <li class="breadcrumb-item"><a href="#">Contact</a></li>
    <li class="breadcrumb-item active" aria-current="page">Subcategory</li>
  </ol>
</nav>
       
        </>
);
}
export default Navbar;