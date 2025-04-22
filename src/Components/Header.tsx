import "../Stylesheets/Header.scss"
import cat_photo from "./cat_logo.png"

// The header that will be displayed on all pages
const Header = () => {
    return <div>
        <header className="header">

            <a href="/">
                <img src={cat_photo} alt="cat photo" className="logo" />
            </a>

            <p className="title">iNeedWater</p>
            
            <nav>
                <a href="/plantlist">Plant List</a>
                <a href="/calendar">Calendar</a>
            </nav>
        </header>
    </div>
}
export default Header;