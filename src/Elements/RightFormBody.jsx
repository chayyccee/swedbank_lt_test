import LoanImage from '../Static/body_images/women.svg';

// Hooks
import { useDesktopMedia } from '../Hooks/ResponsiveHook';


const RightFormBody =  () => {

    const desktopDevice = useDesktopMedia();

    return (
        <div>
           <img
             style={{
                 width: desktopDevice ? "710px" : "300px",
                 height: desktopDevice ? "397px" : "200px",
                 marginTop: !desktopDevice && "1rem",
                 marginBottom: !desktopDevice && "1.7rem"
            }}
            src={LoanImage}
            alt="illustrative"
            />
        </div>
    );
}

export default RightFormBody;
