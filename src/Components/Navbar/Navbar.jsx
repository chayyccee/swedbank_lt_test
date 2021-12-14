import { LoginOutlined } from '@ant-design/icons';

// Company logo
import Logo from '../../Static/Logo/swedbank.svg';

// Hooks
import { useDesktopMedia, useMedia } from '../../Hooks/ResponsiveHook';

// Elements
import DropDown from '../../Elements/DropDown';
import SearchBar from '../../Elements/SearchBar';

// Stylesheet
import './navbar.css';

const Navbar = () => {

    const desktopDevice = useDesktopMedia();
    const alsoDesktopDevice = useMedia('(min-width: 960px)');

    return(
        <div className="container">
            <div className="navbar">
            <div className="div1">
                <img
                  style={{
                      width: "155px",
                      height: "90px"
                 }}
                  src={Logo}
                  alt="Swedbank Logo"
                 />
                {alsoDesktopDevice ? (
                    <div className="logo-partner">
                        <DropDown />
                    </div>
                ) : null}
            </div>
            {desktopDevice ? (
                <div className="div2">
                    <SearchBar />
                </div>
            ) : null}
            <div className="div3">
                {alsoDesktopDevice ? (
                    <div>
                        <p style={{ fontSize: "20px" }} >Become a Customer</p>
                    </div>
                ) : null}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <LoginOutlined 
                  style={{
                      color: "#ee7023",
                      marginLeft: !desktopDevice ? "0px" : "20px",
                      marginRight: "6px",
                      fontSize: "30px"
                 }}
                 />
                  <p style={{ fontSize: "20px" }} >Log In</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Navbar;
