import logo from "../layouts/YesWeFound.png";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import logout from "../layouts/logout.png";

class Navbar extends Component {
  state = { search: "" };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand ml-5" href="#">
          <img src={logo} alt="logo" style={{ width: "60px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="fas fa-bars" style={{ color: "#fff" }} />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link text-white text-uppercase ml-5" to="/">
                Home&nbsp;
                <i className="fas fa-home" />
                <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/contacts"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="menu-set">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={e => {
                  this.setState({ search: e.target.value });
                }}
              />
              <button
                className="btn btn-outline-primary  my-2 my-sm-0"
                type="button"
                onClick={() => this.props.search(this.state.search)}
              >
                Search
              </button>
            </form>
            <div className="auth">
              <Link to="/login">
                <button
                  className="btn btn-outline-primary  my-2 my-sm-0"
                  type="submit"
                >
                  Sign in
                </button>
              </Link>

              <Link to="/Signup">
                <button
                  className="btn btn-outline-primary  my-2 my-sm-0"
                  type="submit"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Link to={`/login/`}>
          <img
            className="logout"
            src={logout}
            width="38px"
            onClick={() => {
              localStorage.removeItem("token");
            }}
          />
        </Link>
      </nav>
    );
  }
}

export default Navbar;
