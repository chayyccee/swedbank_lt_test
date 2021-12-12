import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

// Stylesheet
import "./searchbar.css";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#fa7f25',
    }}
  />
);


const onSearch = value => console.log(value);

const SearchBar = () => {
    return (
        <>
          <Space direction="vertical">
            <Search
                style={{ borderBottom: "2px solid #fa7f25" }}
                bordered={false}
                placeholder="Find a Product"
                enterButton
                size="large"
                suffix={suffix}
                onSearch={onSearch}
                allowClear
            />
          </Space>
        </>
    );
}

export default SearchBar;
