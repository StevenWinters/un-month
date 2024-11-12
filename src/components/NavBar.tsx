import UNLogo from "../assets/un-logo.png";

const NavBar = () => {
  return (
    <header>
      <nav className="flex align--center gap--sm justify--center nav__bar">
        <img src={UNLogo} className="img img--logo" alt="" />
        <span className="logo__heading">
          United <br />
          Nations
        </span>
        <span className="nav__heading">United as one</span>
      </nav>
    </header>
  );
};

export default NavBar;
