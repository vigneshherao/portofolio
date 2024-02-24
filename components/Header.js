import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="head-top">
      <div>
        <span>VIGNESH</span>
      </div>
      <div class="dropdown show dropleft">
        <a
          class="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
        <i className="fa-solid fa-bars fa-lg"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <Link className="dropdown-item" to={"/"}>  Home</Link>
          <Link className="dropdown-item" to={"/project"}>  Projects</Link>
          <Link className="dropdown-item" to={"/certificates"}>  Certificates</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
