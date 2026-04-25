import "./Header.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import account from "../../assets/account.svg";

export default function Header({ currentPath, onNavigate }) {
  const navItems = [
    { label: "TV", path: "/tv", disabled: false },
    { label: "Phone", path: "/phone", disabled: true },
    { label: "Laptop", path: "/laptop", disabled: true },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="navbar">
          <button className="logo" onClick={() => onNavigate("/tv")}>
            <img src={logo} alt="logo" />
          </button>
          <div className="navbar-items">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => !item.disabled && onNavigate(item.path)}
                disabled={item.disabled}
                className={currentPath === item.path ? "active" : ""}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="menu">
          <button>
            <img src={cart} alt="cart" />
          </button>
          <button>
            <img src={account} alt="account" />
          </button>
        </div>
      </div>
    </header>
  );
}
