// Stylesheet
import './layout.css';

const Layout = ({ children }) => {
    return(
        <>
        <div className="border"></div>
        <div className="container">
            <main>{children}</main>
        </div>
        </>
    );
}

export default Layout;
