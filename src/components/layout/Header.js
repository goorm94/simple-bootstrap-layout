import {useState} from "react";

function Header({ toggle }) {
    //const [isOpen, setIsOpen] = useState("off");

  return (
    <>
      <div className="mid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
              <button className="btn btn-primary" id="menu-toggle" onClick={toggle} >Toggle Menu</button>
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                      aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                      <li className="nav-item active">
                          <a className="nav-link" href="#!">
                              Home
                              <span className="sr-only">(current)</span>
                          </a>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#!" role="button"
                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                              <a className="dropdown-item" href="#!">Action</a>
                              <a className="dropdown-item" href="#!">Another action</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#!">Something else here</a>
                          </div>
                      </li>
                  </ul>
              </div>
          </nav>
      </div>
    </>
  );
}

export default Header;