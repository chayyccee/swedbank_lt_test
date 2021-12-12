import { PageHeader, Form, message, Input } from "antd";

// Elements
import { StepPanel } from "../../Elements/StepPanel";

// stylesheet
import './stepform.css';

const StepForm = () => {

    const [stepForm] = Form.useForm();

    const Step1Form = () => {
        return (
          <div className="step1_form">
            <div className="step1_form">
            <Form.Item name="firstName" label="First Name">
              <Input
                variant={
                    window.matchMedia("(max-width: 700px)").matches
                    ? ('small')
                    : window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                    ? ('default')
                    : ('large')
                  }
                  placeholder="Type Here"
                 
              />
            </Form.Item>
            </div>
            <div className="step1_form">
            <Form.Item name="lastName" label="Last Name">
              <Input
                variant={
                    window.matchMedia("(max-width: 700px)").matches
                    ? ('small')
                    : window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                    ? ('default')
                    : ('large')
                  }
                  placeholder="Type Here"
              />
            </Form.Item>
            </div>
            <div className="step1_form">
            <Form.Item name="middleName" label="Middle Name">
              <Input
                variant={
                    window.matchMedia("(max-width: 700px)").matches
                    ? ('small')
                    : window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                    ? ('default')
                    : ('large')
                  }
                  placeholder="Type Here"
              />
            </Form.Item>
            </div>
            <div className="step1_form">
            <Form.Item name="dateOfBirth" label="Date Of Birth">
              <Input
                variant={
                    window.matchMedia("(max-width: 700px)").matches
                    ? ('small')
                    : window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                    ? ('default')
                    : ('large')
                  }
                  placeholder="Type Here"
              />
            </Form.Item>
            </div>
            <div className="step1_form">
            <Form.Item name="phoneNumber" label="Phone Number">
              <Input
                variant={
                    window.matchMedia("(max-width: 700px)").matches
                    ? ('small')
                    : window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                    ? ('default')
                    : ('large')
                  }
                  placeholder="Type Here"
              />
            </Form.Item>
            </div>
            <div className="step1_form">
            <Form.Item name="gender" label="Gender">
              <Input
                variant={
                    window.matchMedia("(max-width: 700px)").matches
                    ? ('small')
                    : window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                    ? ('default')
                    : ('large')
                  }
                  placeholder="Type Here"
              />
            </Form.Item>
            </div>
          </div>
        );
      };
    
      const Step2Form = () => {
        return (
          <>
            <Form.Item name="field2" label="Field2">
              <Input />
            </Form.Item>
          </>
        );
      };
    
      const Step3Form = () => {
        return (
          <>
            <Form.Item name="field3" label="Field3">
              <Input />
            </Form.Item>
          </>
        );
      };
    
      const onFinish = (fieldsValue) => {
        const formData = stepForm.getFieldsValue();
    
        // POST the data to backend and show Notification
        message.success('Processing complete!');
        console.log(formData);
      };
    
      const steps = [
        {
          step: 1,
          title: "Step1",
          content: <Step1Form />
        },
        {
          step: 2,
          title: "Step2",
          content: <Step2Form />
        },
        {
            step: 3,
            title: "Step3",
            content: <Step3Form />
          }
      ];

    return (
        <>
            <PageHeader title="Step Form" subTitle="Multi-Step form" />
              <div className="my_step_form_body">
                <Form form={stepForm} onFinish={onFinish}>
                  <StepPanel steps={steps} />
                </Form>
              </div>
        </>
    );
}

export default StepForm;
