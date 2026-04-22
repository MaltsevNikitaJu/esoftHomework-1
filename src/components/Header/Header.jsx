import './Header.css'
import logo from '../../assets/logo.svg'
import cart from '../../assets/cart.svg'
import account from '../../assets/account.svg'
export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="navbar">
                    <div className="logo"><img src={logo} alt="logo" /></div>
                    <div className="navbar-items">
                            <button>TV</button>
                            <button>Phone</button>
                            <button>Laptop</button>

                    </div>
                </div>
                <div className="menu">
                    <button><img src={cart} alt="cart" /></button>
                    <button><img src={account} alt="account" /></button>
                </div>
            </div>
        </header>
    )
}