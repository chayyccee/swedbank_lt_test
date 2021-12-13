import { useState } from "react";
import { Button, Steps } from "antd";

const StepPanel = (props) => {
  const [activeStep, setActiveStep] = useState(0);

  function next() {
      
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
  }

  function prev() {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
  }

  return (
    <>
      <Steps responsive={true} current={activeStep}>
        {props.steps.map((item) => (
          <Steps.Step key={item.title} title={item.title} />
        ))}
      </Steps>
      {props.steps.map((item) => (
        <div
          className={`steps-content ${
            item.step !== activeStep + 1 && "hidden"
          }`}
        >
          {item.content}
        </div>
      ))}
      <div className="steps-action">
        {activeStep < props.steps.length - 1 && (
          <Button style={{ marginTop: "20px" }} type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {activeStep === props.steps.length - 1 && (
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        )}
        {activeStep > 0 && (
          <Button style={{ margin: "20px 15.5px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export { StepPanel };
