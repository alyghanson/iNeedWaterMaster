import "../Stylesheets/Header.scss"
import cat_photo from "../Pictures/cat_logo.png"
import divider from "../Pictures/Divider.png"

// The header that will be displayed on all pages
const Header = () => {
    return <div>
        <header className="header">

            <a href="/">
                <img src={cat_photo} alt="cat photo" className="logo" />
            </a>
            <img className="divider" src={divider} alt="nothing"/>
            <p className="title">iNeedWater</p>
            <img className="divider" src={divider} alt="nothing"/>
            <nav>
                <a className="menuButton" href="/plantlist">Plant List</a>
                <a className="menuButton" href="/calendar">Calendar</a>
            </nav>
        </header>
    </div>
}
export default Header;