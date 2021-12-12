import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

//Stylesheet
import "antd/dist/antd.css";
import "./dropdown.css";

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.swedbank.lt/business">Business</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.swedbank.lt/about">About Swedbank</a>
      </Menu.Item>
    </Menu>
  );

const DropDown = () => {
    return (
        <Dropdown overlayStyle={{ width: "160px"}} overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <div className="down">
             <p>Private</p>
             <DownOutlined style={{ color: "#ee7023", paddingTop: "9px", marginLeft: "4px", fontSize: "15px" }} />    
            </div>    
            </a>
        </Dropdown>
    );
}

export default DropDown;
