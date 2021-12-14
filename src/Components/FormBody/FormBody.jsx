import Slide from 'react-reveal/Slide';

// Hooks
import { useDesktopMedia } from '../../Hooks/ResponsiveHook';

// Elements
import LeftFormBody from '../../Elements/LeftFormBody';
import RightFormBody from '../../Elements/RightFormBody';

// Stylesheet
import './formbody.css';

const FormBody = () => {

    const desktopDevice = useDesktopMedia();

    return (
        <div className="content">
            <Slide left>
              <LeftFormBody />
            </Slide>
            {desktopDevice ? (
                <Slide right>
                    <RightFormBody />
                </Slide>
            ) : null}
        </div>
    );
}

export default FormBody;
