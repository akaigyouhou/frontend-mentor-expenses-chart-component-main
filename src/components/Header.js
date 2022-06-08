import "./header.css";
import Logo from "../images/logo.svg";

function Header() {
    return (
        <header className="header">
            <div className="header__count">
                <span className="header__title">My balance</span>
                <span className="header__number">$921.48</span>
            </div>
            <img className="logo header__logo" src={Logo} alt="logo">
            </img>
        </header>
    );
}

export default Header;
