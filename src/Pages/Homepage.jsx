// Components
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Layout from '../Components/Layout/Layout';
import FormBody from '../Components/FormBody/FormBody';

// Stylesheet
 import './Homepage.css';

// Elements
import Timeline from '../Components/AwardsSection/Timeline';

const Homepage = () => {
    return (
        <>
        <Layout>
            <div className="container">
            <Navbar />
            </div>
        </Layout>
        <div>
            <Timeline />
        </div>
        <FormBody />
        <Layout>
            <div className="footer_container">
            <Footer />
            </div>
        </Layout>
        </>
    );
}

export default Homepage;