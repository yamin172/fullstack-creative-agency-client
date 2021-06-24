import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../Images/Navbar brand logo.png';

const Navbar = () => {
    const [loggedInUser] = useContext(UserContext);
    const style = {
        borderRadius: '50%',
        height: '42px',
        width: '42px'
    }
    return (
        <section>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid container">
                    <a class="navbar-brand" href="#home" to="/home"><img class="w-25 image-fluid" src={logo} alt="Navar brand logo"/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"> <a class="nav-link fw-bold active text-uppercase me-2" aria-current="page" href="#home" to="/home"> Home </a> </li>
                        <li class="nav-item"> <a class="nav-link fw-bold text-uppercase me-2" aria-current="page" href="#services" to="/services"> Services </a> </li>
                        <li class="nav-item"> <a class="nav-link fw-bold text-uppercase me-2" aria-current="page" href="#projects" to="/projects"> Projects </a> </li>
                        
                        <li class="nav-item"> <Link to="/admin"class="nav-link fw-bold text-uppercase me-2" aria-current="page" href="#admin"> Admin </Link> </li>
                            <li class="nav-item">
                                {
                                    loggedInUser.photoURL ? <img src={loggedInUser.photoURL} alt="" style={style} /> :
                                    <Link class="nav-link fw-bold text-uppercase btn bg-danger text-white" aria-current="page" href="#login" to="/login"> login </Link>    
                                }
                            </li> 
                    </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;