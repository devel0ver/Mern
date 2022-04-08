import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import $ from "jquery";
import '../App.css';
import {
    Link
} from 'react-router-dom';

const NavBarToAccount = () => {

    return (
        <div className='d-block'>
            <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-md fixed-top" style={{backgroundColor: "#C7C5C5", height: "130px"}}>
                <section className='navbar navbar-expand-md mt-4 fixed-top mid'>
                    <div>
                        <Link to="/home" className="navbar-brand fs-1" style={{fontFamily: "'Tangerine', cursive"}}>MC</Link>
                    </div>
                    <div>
                        <h1 style={{color: "badge", fontFamily: "'Cinzel', serif"}}>Modest Collection</h1>
                    </div>
                    <div id="navLinks">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link style={{color: "black"}} to='/account'><PersonIcon style={{fontSize: "40px"}}></PersonIcon></Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link style={{color: "black"}} to='/'><ShoppingBagIcon style={{fontSize: "35px"}}></ShoppingBagIcon></Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='home'>
                    <Link to='/home' className='txt'><strong>Home</strong></Link>
                    <Link to='/all_products' className='txt'><strong>All Products</strong></Link>
                    <div className='dropdown'>
                        <Link className="txt" to='' role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>Womens Clothing</strong>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down rotate" viewBox="0 -1 12 20">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Satin dresses</a></li>
                            <li><a className="dropdown-item" href="#">Abayas</a></li>
                            <li><a className="dropdown-item" href="#">Cardigans</a></li>
                            <li><a className="dropdown-item" href="#">Prayer Outfits</a></li>
                        </ul>
                    </div>
                    <div className='dropdown'>
                        <Link className="txt" to='' role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>Accessories</strong>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down rotate" viewBox="0 -1 12 20">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Prayer Mats</a></li>
                        </ul>
                    </div>
                    <div className='dropdown'>
                        <Link className="txt" to='' role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>Hijabs</strong>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down rotate" viewBox="0 -1 12 20">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Chifon Classics</a></li>
                        </ul>
                    </div>
                    <Link to='/contact' className='txt'><strong>Contact</strong></Link>
                </section>
            </nav>
        </div>
    );
};

export default NavBarToAccount;