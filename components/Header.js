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
          <a class="dropdown-item" href="#">
            Home
          </a>
          <a class="dropdown-item" href="#">
            Projects
          </a>
          <a class="dropdown-item" href="#">
            Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
