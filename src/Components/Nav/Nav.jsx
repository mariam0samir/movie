import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';

export default function Nav() {
  const state = useSelector((state) => state.love);

  return (
    <>
      <nav className="bg-dark-blue fw-bold py-1 navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/Movies-React-App">
            <div className="logo">
              <span className="m">M</span>
              <span className="o">O</span>
              <span className="v">V</span>
              <span className="i">I</span>
              <span className="e">E</span>
              <span className="s">S</span>
            </div>
          </a>

          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#basic-navbar-nav"
            aria-controls="basic-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="basic-navbar-nav">
            <div className="ms-auto gap-4 nav align-items-center navbar-nav">
              <Link className="text-light active nav-link" to="">Home</Link>
              <Link className="text-light nav-link" to="movies">Movies</Link>
              <Link className="text-light nav-link" to="about">About Us</Link>
              <Link className="text-light nav-link" to="contact">Contact</Link>

              <Link className="love-icon text-light fs-4 nav-link" to="fav">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                </svg>
                <div className="loves-num bg-white text-red d-flex align-items-center justify-content-center rounded-circle">
                  {state.length}
                </div>
              </Link>

              <Link className="terch-icon text-light fs-5 nav-link" to="search">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
