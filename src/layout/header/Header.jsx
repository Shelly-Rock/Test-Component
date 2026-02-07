import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">MyLogo</Link>
      </div>

      <nav className="header__nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/transactionList" className="nav-link">Transaction List</Link>
        <Link to="/timeRangeTabs" className="nav-link">TimeRangeTabs</Link>
        <Link to="/dailyCheckin" className="nav-link">Daily Checkin</Link>
        </nav>
        </header>
    );
}

export default Header;
