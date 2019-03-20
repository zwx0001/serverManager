import React, { Component } from "react";
import "./index.css";
import { Steps, Button, message } from "antd";
import { Route } from "dva/router";
import Business from "../step1_business";
import Finish from "../step3_finish";
import Servers from "../step2_server";
const Step = Steps.Step;
const steps = [
  {
    title: "业务详情",
    content: "/business"
  },
  {
    title: "服务器详情",
    content: "/server"
  },
  {
    title: "确认",
    content: "/finish"
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
    this.props.history.push(steps[current].content);
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
    this.props.history.push(steps[current].content);
  }

  render() {
    const { current } = this.state;

    return (
      <div className="home">
        <div className="content">
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content main">
            <Route path="/business" component={Business} />
            <Route path="/server" component={Servers} />
            <Route path="/finish" component={Finish} />
          </div>
          <div className="steps-action btn">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => this.next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
