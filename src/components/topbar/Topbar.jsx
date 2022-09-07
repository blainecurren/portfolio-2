import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            blaine.
          </a>
          <div className="itemContainer">
            <span>+1-940-704-2282</span>
          </div>
          <div className="itemContainer">
            <a href="mailto:blaine.curren@gmail.com?body=My custom mail body">
              blaine.curren@gmail.com
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
