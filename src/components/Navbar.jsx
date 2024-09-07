import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </ li>
            </ul>

            {/* Custom Theme button */}
            <div className="dropdown mx-3">
              <a
                className="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                विषय को परिवर्तित करें
              </a>

              <ul className="dropdown-menu">
                {props.theme.map((item, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      className={`btn btn-${item.themeType}`}
                      style={{ width: "100%", border: "1px solid black" }}
                      onClick={item.themeFunction}
                    >
                      {item.themeName}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="खोज"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                खोज
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string,
  theme: PropTypes.array,
};

export default Navbar;
