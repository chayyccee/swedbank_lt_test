import { useState } from 'react';

// Components
import StepForm from '../Components/StepForm/StepForm';

import { Button, Modal } from 'antd';

// Stylesheet
import './leftformbody.css';

const LeftFormBody = () => {

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setVisible(true);
      };

    const handleOk = () => {
        setModalText('Thank You for filling the form. An agent will be in touch shortly');
        setConfirmLoading(true);
        setTimeout(() => {
          setVisible(false);
          setConfirmLoading(false);
        }, 2000);
      };

    const [modalText, setModalText] = useState(<StepForm handleOk={handleOk} />);

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
      };

    return (
        <div className="leftformbody-content">
            <h1>Mortgage Loan</h1>
            <h2>There's no place like home</h2>
            <p>Home loan will be a perfect solution if you need a loan for a new home, serious renovation or
                construction
            </p>
            <span className="regular-list">
                <p>
                  Fast application processing
                </p>
                <p>
                  Opportunity to pay back earlier and manage your contract via Internet Banking
                </p>
                <p>
                  We constantly offer discounts for home loans, when you receive the discount code from the seller and,
                  please, do not forget to submit it completing the application for the home loan in the Internet Bank
                </p>
            </span>
            <div className="btn-grp">
            <Button type='primary' onClick={showModal} size='large'>
                Fill in the application
            </Button>
            <Button style={{ marginLeft: "1rem", color: "white", backgroundColor: "#0F1624"}} size='large'>
                Apply as a co-applicant
            </Button>
            </div>

            <Modal
              title="Mortgage Loan"
              visible={visible}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
              footer={null}
              keyboard={true}
              width={1000}
              centered={true}
              bodyStyle={{ backgroundColor: 'bisque' }}
            >
              <p>{modalText}</p>
            </Modal>

        </div>
    );
}

export default LeftFormBody;
