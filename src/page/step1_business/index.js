import React, { Component } from "react";
import { Select, Input, Button, message } from "antd";
import "./index.css";
import { connect } from "dva";
const Option = Select.Option;

class Business extends Component {
  state = {
    proline: "产品线1",
    use: "",
    logic: "",
    value_pv: "120W",
    value_qps: "1W",
    value_tps: "1W",
    startDate: ""
  };
  render() {
    return (
      <div className="business">
        <div className="main">
          <div>
            <span>选择产品线:</span>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="请选择产品线"
              optionFilterProp="children"
              onChange={this.handleChange1}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="产品线1">产品线1</Option>
              <Option value="产品线2">产品线2</Option>
              <Option value="产品线3">产品线3</Option>
            </Select>
          </div>
          <div>
            <span>用途:</span>
            <textarea
              onInput={e => this.Input(e, 1)}
              placeholder="默认3行输入"
              cols="30"
              rows="3"
            />
          </div>
          <div>
            <span>业务逻辑:</span>
            <textarea
              onInput={e => this.Input(e, 2)}
              placeholder="默认3行输入"
              cols="30"
              rows="3"
            />
          </div>
          <div>
            <span>日PV:</span>
            <Input
              onChange={e => this.handleChange(e, 1)}
              placeholder="120W"
              value={this.state.value_pv}
            />
          </div>
          <div>
            <span>QPS:</span>
            <Input
              onChange={e => this.handleChange(e, 2)}
              placeholder="1W"
              value={this.state.value_qps}
            />
          </div>
          <div>
            <span>TPS:</span>
            <Input
              onChange={e => this.handleChange(e, 3)}
              placeholder="1W"
              value={this.state.value_tps}
            />
          </div>
          <div style={{ margin: "10px 0" }}>
            <span>开通时间:</span>
            <div
              style={{
                display: "inline-block",
                padding: "3px 0",
                width: 200,
                background: "#ccc",
                textAlign: "center"
              }}
            >
              {this.state.startDate}
            </div>
          </div>
        </div>
        <Button type="primary" onClick={this.next}>
          提交
        </Button>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      startDate: new Date().toLocaleDateString()
    });
  }
  Input = (e, idx) => {
    if (idx === 1) {
      this.setState({
        use: e.target.value
      });
    } else {
      this.setState({
        logic: e.target.value
      });
    }
  };
  handleChange1 = value => {
    this.setState({
      proline: value
    });
  };
  handleChange = (e, idx) => {
    if (idx === 1) {
      this.setState({
        value_pv: e.target.value
      });
    } else if (idx === 2) {
      this.setState({
        value_qps: e.target.value
      });
    } else if (idx === 3) {
      this.setState({
        value_tps: e.target.value
      });
    }
  };
  next = () => {
    let { submit } = this.props;
    let {
      proline,
      use,
      logic,
      value_pv,
      value_qps,
      value_tps,
      startDate
    } = this.state;
    submit({
      proline,
      use,
      logic,
      value_pv,
      value_qps,
      value_tps,
      startDate,
      current: 1
    });
    message.info("提交成功!");
  };
}

export default connect(
  null,
  dispatch => {
    return {
      submit(params) {
        dispatch({
          type: "submitserver/step1",
          payload: params
        });
      }
    };
  }
)(Business);
