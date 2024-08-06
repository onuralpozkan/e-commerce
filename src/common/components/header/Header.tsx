import Button from "../button/Button";
import SearchInput from "../searchInput/SearchInput";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__brand-container">
        <span className="header__brand">Brand</span>
      </div>
      <div className="header__search-container">
        <SearchInput role="searchbox" />
      </div>
      <div className="header__login-container">
        <Button variant="primary" className="header__login-button">
          Login
        </Button>
        <Button variant="text" className="header__sign-up-button">
          Sign up
        </Button>
      </div>
    </header>
  );
};

export default Header;
