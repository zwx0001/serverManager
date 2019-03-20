import React, { Component } from "react";
import "./index.css";
import { Select } from "antd";
import { connect } from "dva";
const Option = Select.Option;
class Finish extends Component {
  render() {
    let { getdata } = this.props;
    let data = getdata();
    let {
      proline,
      use,
      logic,
      value_pv,
      value_qps,
      value_tps,
      startDate
    } = data.submitserver.step1;
    let { system, machine_room, value, checkbox } = data.submitserver.step2;

    return (
      <div className="finish">
        <div className="main">
          <div>
            <span>申请信息:</span>
            <ul>
              <li>申请人:张文秀</li>
              <li>申请部门:运维开发</li>
              <li>申请类型:系统资源申请</li>
              <li>开通时间:{startDate}</li>
            </ul>
          </div>
          <div>
            <span>业务详情:</span>
            <ul>
              <li>产品线:{proline}</li>
              <li>用途:{use}</li>
              <li>业务逻辑:{logic}</li>
              <li>日PV:{value_pv}</li>
              <li>QPS:{value_qps}</li>
              <li>TPS:{value_tps}</li>
            </ul>
          </div>
          <div>
            <span>服务详情:</span>
            <ul>
              <li>系统:{system && system[0]}</li>
              <li>CPU:{system && system[1]}</li>
              <li>内存:{system && system[2]}</li>
              <li>硬盘:{system && system[3]}</li>
              <li>公网IP:{value && value.ip}</li>
              <li>负载均衡:{value && value.load}</li>
              <li>机房:{machine_room}</li>
              <li>申请数量:{value && value.num}台</li>
            </ul>
          </div>
          <div>
            <span>安装:</span>
            <ul>
              <li>
                安装软件:
                {checkbox &&
                  checkbox.map((item, index) => {
                    return (
                      <i style={{ marginRight: "5px" }} key={index}>
                        {item}
                      </i>
                    );
                  })}
              </li>
              <li>仓库地址:http://www.baidu.com</li>
              <li>监控:端口号,url:POST http://www.51.com</li>
            </ul>
          </div>
          <div>
            <span>其他:</span>
            <div style={{ marginLeft: "50px" }}>
              <span>备注 </span>
              <textarea
                style={{ marginBottom: "10px" }}
                placeholder="其他未尽事宜"
                cols="30"
                rows="1"
              />
              <br />
              <span>审核组 </span>
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
                <Option value="API审核组">API审核组</Option>
                <Option value="JAVA审核组">JAVA审核组</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {}
}

export default connect(state => {
  return {
    getdata() {
      return state;
    }
  };
})(Finish);
