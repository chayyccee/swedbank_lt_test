import { Menu } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

// Company logo
import Logo from '../../Static/Logo/swedbank.svg';

// Elements
import DropDown from '../../Elements/DropDown';
import SearchBar from '../../Elements/SearchBar';

// Stylesheet
import './navbar.css';

const Navbar = () => {
    return(
        <div className="container">
            <div className="navbar">
            <div className="div1">
                
                    <img style={{ width: "155px", height: "90px"}} src={Logo} alt="Swedbank Logo" />
                
                <div className="logo-partner">
                    
                    <DropDown />
                </div>
            </div>
            <div className="div2">
                <SearchBar />
            </div>
            <div className="div3">
                
                <div>
                    <p style={{ fontSize: "20px" }} >Become a Customer</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <LoginOutlined style={{ color: "#ee7023", marginLeft: "20px", marginRight: "6px", fontSize: "30px" }} />
                  <p style={{ fontSize: "20px" }} >Log In</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Navbar;
