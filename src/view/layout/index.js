import React, { Component } from "react";

class Layout extends Component {
  constructor() {
    super();
    this.state = {};

  }
  componentDidMount() {

  }
  changeRouter() {
    this.props.history.push({
      pathname: '/app',
      search: `?id=121212&&name=565545`
    });
  }
  render() {
    return (
      <div className="Layout">
        <div onClick={this.changeRouter.bind(this)}>
          è·³è½¬
         </div>
      </div>
    );
  }
}

export default Layout;

