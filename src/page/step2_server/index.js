import React, { Component } from "react";
import "./index.css";
import { Checkbox, Row, Col, Select, Radio, Button,message } from "antd";
import { connect } from "dva";

const Option = Select.Option;
const RadioGroup = Radio.Group;

class Servers extends Component {
  state = {
    arr: [
      {
        nm: "系统",
        items: ["Contos6.8", "Contos7.0", "Contos2008"]
      },
      {
        nm: "CPU",
        items: ["2", "6", "16", "32", "64"]
      },
      {
        nm: "内存",
        items: ["2", "6", "16", "32", "64", "128", "256"]
      },
      {
        nm: "硬盘",
        items: ["20", "40", "100", "600", "800", "1T"]
      }
    ],
    system: [],
    value: { num: 1 ,ip:'是',load:'是'},
    idx0: 0,
    idx1: 0,
    idx2: 0,
    idx3: 0,
    machine_room: "",
    checkbox: []
  };
  render() {
    return (
      <div className="server">
        <div className="main">
          <div>
            <span>系统硬件:</span>
            <ul>
              <li>
                <span>{this.state.arr[0].nm}</span>
                <div>
                  {this.state.arr[0].items &&
                    this.state.arr[0].items.map((itm, idx) => (
                      <span
                        className={this.state.idx0 === idx ? "active" : ""}
                        onClick={() => this.handleClick(0, idx)}
                        key={idx}
                      >
                        {itm}
                      </span>
                    ))}
                </div>
              </li>
              <li>
                <span>{this.state.arr[1].nm}</span>
                <div>
                  {this.state.arr[1].items &&
                    this.state.arr[1].items.map((itm, idx) => (
                      <span
                        className={this.state.idx1 === idx ? "active" : ""}
                        onClick={() => this.handleClick(1, idx)}
                        key={idx}
                      >
                        {itm}
                      </span>
                    ))}
                </div>
              </li>
              <li>
                <span>{this.state.arr[2].nm}</span>
                <div>
                  {this.state.arr[2].items &&
                    this.state.arr[2].items.map((itm, idx) => (
                      <span
                        className={this.state.idx2 === idx ? "active" : ""}
                        onClick={() => this.handleClick(2, idx)}
                        key={idx}
                      >
                        {itm}
                      </span>
                    ))}
                </div>
              </li>
              <li>
                <span>{this.state.arr[3].nm}</span>
                <div>
                  {this.state.arr[3].items &&
                    this.state.arr[3].items.map((itm, idx) => (
                      <span
                        className={this.state.idx3 === idx ? "active" : ""}
                        onClick={() => this.handleClick(3, idx)}
                        key={idx}
                      >
                        {itm}
                      </span>
                    ))}
                </div>
              </li>
            </ul>
          </div>
          <div>
            <span>安全软件:</span>
            <div>
              <Checkbox.Group
                style={{ width: "100%" }}
                onChange={this.onChange}
              >
                <Row>
                  <Col span={3}>
                    <Checkbox value="PHP5.7">PHP5.7</Checkbox>
                  </Col>
                  <Col span={3}>
                    <Checkbox value="Niginx1.2">Niginx1.2</Checkbox>
                  </Col>
                  <Col span={3}>
                    <Checkbox value="Rabbitmq3.6">Rabbitmq3.6</Checkbox>
                  </Col>
                  <Col span={3}>
                    <Checkbox value="JDK1.7">JDK1.7</Checkbox>
                  </Col>
                  <Col span={3}>
                    <Checkbox value="Mysql5.7">Mysql5.7</Checkbox>
                  </Col>
                  <Col span={3}>
                    <Checkbox value="PHP5.6">PHP5.6</Checkbox>
                  </Col>
                  <Col span={3}>
                    <Checkbox value="zookeeper">zookeeper</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </div>
          </div>
          <div>
            <span>其他:</span>
            <div style={{ marginLeft: "50px" }}>
              <div>
                <span style={{ marginRight: "10px" }}>机房</span>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="请选择机房"
                  optionFilterProp="children"
                  onChange={this.handleChange}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="北京阿里云">北京阿里云</Option>
                  <Option value="杭州阿里云">杭州阿里云</Option>
                </Select>
              </div>
              <div style={{ margin: "7px 0" }}>
                <span style={{ marginRight: "10px" }}>公网IP</span>
                <RadioGroup onChange={this.onChange1} value={this.state.value.ip}>
                  <Radio value={"是"}>是</Radio>
                  <Radio value={"否"}>否</Radio>
                </RadioGroup>
              </div>
              <div>
                <span style={{ marginRight: "10px" }}>负载均衡</span>
                <RadioGroup onChange={this.onChange2} value={this.state.value.load}>
                  <Radio value={"是"}>是</Radio>
                  <Radio value={"否"}>否</Radio>
                </RadioGroup>
              </div>
              <div style={{ marginTop: "7px" }}>
                <span style={{ marginRight: "10px" }}>申请数量</span>
                <input
                  value={this.state.value.num}
                  onChange={e => {
                    let { value } = this.state;
                    value.num = e.target.value;
                    this.setState({
                      value
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <Button type="primary" onClick={this.next}>
          提交
        </Button>
      </div>
    );
  }
  handleClick = (i, idx) => {
    let { system, arr } = this.state;
    if (i === 0) {
      system[0] = arr[0].items[idx];

      this.setState({
        idx0: idx,
        system
      });
    } else if (i === 1) {
      system[1] = arr[1].items[idx];
      this.setState({
        idx1: idx,
        system
      });
    } else if (i === 2) {
      system[2] = arr[2].items[idx];
      this.setState({
        idx2: idx,
        system
      });
    } else {
      system[3] = arr[3].items[idx];
      this.setState({
        idx3: idx,
        system
      });
    }
  };
  handleChange = value => {
    this.setState({
      machine_room: value
    });
  };
  onChange1 = e => {
    let { value } = this.state;
    value.ip = e.target.value;
    this.setState({
      value
    });
  };
  onChange2 = e => {
    let { value } = this.state;
    value.load = e.target.value;
    this.setState({
      value
    });
  };
  onChange = checkedValues => {
    this.setState({
      checkbox: checkedValues
    });
  };
  next = () => {
    let { submit } = this.props;
    let { system, machine_room, value, checkbox } = this.state;
    submit({
      system,
      machine_room,
      value,
      checkbox,
      current:2
    });
    message.info('提交成功!')
    
  };
 
}

export default connect(
  null,
  dispatch => {
    return {
      submit(params) {
        dispatch({
          type: "submitserver/step2",
          payload: params
        });
      }
    };
  }
)(Servers);
