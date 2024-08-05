import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__brand-container">
        <span className="header__brand">Brand</span>
      </div>
      <div className="header__search-container">
        <input
          type="search"
          name="searchProducts"
          id="searchProducts"
          placeholder="Search..."
        />
      </div>
      <div className="header__login-container">
        <button className="header__login-button">Login</button>
        <button className="header__sign-up-button">Sign up</button>
      </div>
    </header>
  );
};

export default Header;
