import { Component } from "react";

class HistorySample extends Component {
  handlegoBack = () => {
    this.props.history.goBack();
  };
  handlegoHome = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    this.unblock = this.props.history.block("정말 떠나실 건가요?");
  }

  componentWillUnmount() {
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handlegoBack}>뒤로</button>
        <button onClick={this.handlegoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;
