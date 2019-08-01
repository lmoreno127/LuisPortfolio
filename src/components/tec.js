import React from "react";
import ReactTooltip from "react-tooltip";
class Tec extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img
          className="logo"
          src={this.props.imr}
          alt="logo"
          data-tip={this.props.tname}
        />
        <ReactTooltip />
      </div>
    );
  }
}

export default Tec;
