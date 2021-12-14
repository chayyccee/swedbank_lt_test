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
            <LeftFormBody />
            {desktopDevice ? (
                <RightFormBody />
            ) : null}
        </div>
    );
}

export default FormBody;
