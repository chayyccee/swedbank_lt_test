import { useState, useEffect } from "react";

import { PageHeader, Form, message, Input, Checkbox, Radio } from "antd";

// Elements
import { StepPanel } from "../../Elements/StepPanel";

// stylesheet
import './stepform.css';

const StepForm = ({ handleOk }) => {

    const [stepForm] = Form.useForm();

    const Step1Form = () => {
        return (
          <div className="step1_form">
            <div className="step1_form">
            <Form.Item
              name="loanPurpose"
              rules={[
                {
                  required: true,
                  message: 'Please it is required that you state your loan purpose',
                },
              ]}
            >

              <Input
                  style={{
                      margin: '0px',
                      width: window.matchMedia("(max-width: 700px)").matches
                      ? '70%'
                      :       window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                      ? '50%'
                      : '50%'
                    }}
                  placeholder="Loan purpose (e.g Agriculture)*"
                 
              />
            </Form.Item>
            </div>
            <div className="step1_form">
            <Form.Item
              name="loanTerm"
              
              rules={[
                {
                  required: true,
                  message: 'Please specify the loan term.',
                },
              ]}
            >
              <Input
                  style={{
                    marginRight: "5px",
                    width: window.matchMedia("(max-width: 700px)").matches
                    ? '70%'
                    :       window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                    ? '50%'
                    : '50%'
                  }}
                  placeholder="Loan term e.g (3 years)*"
              />
             
            </Form.Item>
            </div>
            <div className="step1_form">
            <Form.Item
              name="downPayment"
              rules={[
                {
                  required: true,
                  message: 'Required field',
                },
              ]}
            >
              <Input
                  style={{ 
                    width: window.matchMedia("(max-width: 700px)").matches
                    ? '70%'
                    :       window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                    ? '50%'
                    : '50%'
                  }}
                  placeholder="How much money do you have for Down payment? (EUR)*"
              />
            </Form.Item>
            </div>
            <div className="step1_form">
            <Form.Item
              name="loanAmount"
              rules={[
                {
                  required: true,
                  message: 'Required Field',
                },
              ]}
            >
                
                   
              <Input
                  style={{ 
                    width: window.matchMedia("(max-width: 700px)").matches
                    ? '70%'
                    :       window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                    ? '50%'
                    : '50%'
                  }}
                  placeholder="Loan amount (EUR)*"
              />
              
              
            </Form.Item>
            </div>
            <div className="step1_form">
            <Form.Item
              name="discountCode" 
            >
              <Input
              style={{ 
                width: window.matchMedia("(max-width: 700px)").matches
                ? '70%'
                :       window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                ? '50%'
                : '50%'
              }}
                  placeholder="Discount code"
              />
            </Form.Item>
            </div>
          </div>
        );
      };
    
      const Step2Form = () => {
        return (
          <>
          <h3>Personal Data</h3>
          <hr style={{ width: "100%", marginBottom: "15px"}} />
          <div className="step1_form">
            <Form.Item
              name="firstName"
              rules={[
                {
                  required: true,
                  message: 'Required Field',
                },
              ]}
            >
              <Input
              style={{ 
                width: window.matchMedia("(max-width: 700px)").matches
                ? '70%'
                :       window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                ? '50%'
                : '50%'
              }}
                  placeholder="First name*"
              />
            </Form.Item>
            </div>
            <div className="step1_form">
            <Form.Item
              name="lastName"
              rules={[
                {
                  required: true,
                  message: 'Required Field',
                },
              ]}
            >
              <Input
              style={{ 
                width: window.matchMedia("(max-width: 700px)").matches
                ? '70%'
                :       window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                ? '50%'
                : '50%'
              }}
                  placeholder="Last name*"
              />
            </Form.Item>
            </div>
            <div className="step1_form">
            <Form.Item
              name="personalCode"
              rules={[
                {
                  required: true,
                  message: 'Required Field',
                },
              ]}
            >
              <Input
              style={{ 
                width: window.matchMedia("(max-width: 700px)").matches
                ? '70%'
                :       window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                ? '50%'
                : '50%'
              }}
                  placeholder="Personal code*"
              />
            </Form.Item>
            </div>
            <div className="step1_form">
            <Form.Item
              name="maritalStatus"
              rules={[
                {
                  required: true,
                  message: 'Required Field',
                },
              ]}
            >
              <Input
              style={{ 
                width: window.matchMedia("(max-width: 700px)").matches
                ? '70%'
                :       window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                ? '50%'
                : '50%'
              }}
                  placeholder="Marital Status (e.g Divorced)*"
              />
            </Form.Item>
            </div>
            <div className="step1_form">
            <Form.Item
              name="numberOfDependents"
              rules={[
                {
                  required: true,
                  message: 'Required Field',
                },
              ]}
            >
              <Input
              style={{ 
                width: window.matchMedia("(max-width: 700px)").matches
                ? '70%'
                :       window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                ? '50%'
                : '50%'
              }}
                  placeholder="Number of dependants in the family*"
              />
            </Form.Item>
            </div>
            <h3>Extended Data</h3>
            <hr style={{ width: "100%", marginBottom: "15px" }} />
            <div className="step1_form">
            <Form.Item
              name="educationAttained"
              rules={[
                {
                  required: true,
                  message: 'Required Field',
                },
              ]}
            >
              <Input
              style={{ 
                width: window.matchMedia("(max-width: 700px)").matches
                ? '70%'
                :       window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                ? '50%'
                : '50%'
              }}
                  placeholder="Education (e.g Bachelors)*"
              />
            </Form.Item>
            </div>
            <div className="step1_form">
            <Form.Item
              name="employmentStatus"
              rules={[
                {
                  required: true,
                  message: 'Required Field',
                },
              ]}
            >
              <Input
              style={{ 
                width: window.matchMedia("(max-width: 700px)").matches
                ? '70%'
                :       window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                ? '50%'
                : '50%'
              }}
                  placeholder="Employment Status (e.g Self-Employed)*"
              />
            </Form.Item>
            </div>
          </>
        );
      };
    
      const Step3Form = () => {
        const [value, setValue] = useState(1);

        const onChange = e => {
            console.log('radio checked', e.target.value);
            setValue(e.target.value);
          };

        return (
          <>
            <h3>Income</h3>
          <hr style={{ width: "100%", marginBottom: "15px"}} />
          <div className="step1_form">
            <Form.Item
              name="incomeAfterTax"
              rules={[
                {
                  required: true,
                  message: 'Required Field',
                },
              ]}
            >
              <Input
              style={{ 
                width: window.matchMedia("(max-width: 700px)").matches
                ? '70%'
                :       window.matchMedia("(min-width: 720px)" && "(max-width: 1033px)").matches
                ? '50%'
                : '50%'
              }}
                  placeholder="Your monthly income after taxes (EUR)*"
              />
            </Form.Item>
            </div>
            <div className="step1_form">
            <Form.Item
              style={{ marginLeft: "100px"}}
              name="additionalIncomeSource"
              label="Extra Source of Income?"
            >
              <Checkbox
                
                onChange={(e)=> {
                    console.log(`checked = ${e.target.checked}`);
                 }}
              >Yes, I have</Checkbox>
            </Form.Item>
            </div>
            <h3>Existing obligations</h3>
          <hr style={{ width: "100%", marginBottom: "15px"}} />
          <div className="step1_form">
            <Form.Item
              style={{ marginLeft: "100px"}}
              name="obligationsOutsideSwedbank"
              label="Do you have obligations outside Swedbank?"
              rules={[
                {
                  required: true,
                  message: 'Required Field',
                },
              ]}
            >
              <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Yes</Radio>
              <Radio value={2}>No</Radio>
              </Radio.Group>
            </Form.Item>
            </div>
          </>
        );
      };

      const Step4Form = () => {
        return (
          <>
            This is the Summary
          </>
        );
      };
    
      const onFinish = (fieldsValue) => {
        const formData = stepForm.getFieldsValue();
    
        // POST the data to backend and show Notification
        message.success('Processing complete!');
        console.log(formData);
        handleOk();
      };
    
      const steps = [
        {
          step: 1,
          title: "Loan application",
          content: <Step1Form />
        },
        {
          step: 2,
          title: "Personal data of applicant",
          content: <Step2Form />
        },
        {
            step: 3,
            title: "Income",
            content: <Step3Form />
          },
          {
            step: 4,
            title: "Summary",
            content: <Step4Form />
          }
      ];

    return (
        <>
            <PageHeader title="Application Form" subTitle="Self-Apply" />
              <div className="my_step_form_body">
                <Form form={stepForm} onFinish={onFinish}>
                  <StepPanel steps={steps} />
                </Form>
              </div>
        </>
    );
}

export default StepForm;
