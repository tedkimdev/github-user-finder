import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Footer from "../../components/Footer";

const mapStateToProps = state => {
  return {
    requestLimit: state.requestLimit
  };
};

export default connect(
  mapStateToProps,
  null
)(Footer);
