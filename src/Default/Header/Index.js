import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid px-5 mx-5">
          <a className="navbar-brand" href="#">
            Aura
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex justify-content-end align-items-center">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/**  <div className="me-3">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/ ">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/about ">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/contact "
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div> */}

              <div className="d-flex header-section align-items-center">
                <p className="me-3 fs-5 mt-3">hello,</p>
                <div className="profile-image me-3">
                  <i class="fa-solid fa-user user-color"></i>
                </div>
                <p className="dropdown-toggle mt-3"></p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
