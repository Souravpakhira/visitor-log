import React from "react";

const navbar = (props) => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            VisitorLog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className={props.status == "form" ? "nav-link active" :"nav-link"} aria-current="page" href="/">
                Home
              </a>
              <a className={props.status == "log" ? "nav-link active" :"nav-link"} href="/Log">
                Visitor Log
              </a>
              <a className={props.status == "news" ? "nav-link active" :"nav-link"} href="/news">
                Latest News
              </a>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
