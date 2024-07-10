function Nav() {
  const links = [
    "Home",
    "About",
    "Services",
    "Credo",
    "Photography",
    "Blog",
    "Contact",
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-5">
              {links.map((element, index) => {
                return (
                  <>
                    <li className="nav-item">
                      {element == "Credo" ? (
                        <a className="navbar-brand text-white" href="#">
                          {" "}
                          {element}{" "}
                        </a>
                      ) : (
                        <a
                          className="nav-link text-white"
                          aria-current="page"
                          href={`#${element}`}
                        >
                          {element}
                        </a>
                      )}
                    </li>
                  </>  
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
