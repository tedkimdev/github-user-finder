import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../../components/Header";
import { searchActions } from "../../store/modules/search";

class HeaderContainer extends Component {
  //TODO: query string,
  // location, history, match
}

// const mapStateToProps = state => {
//   return {
//     keyword: state.search.keyword
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    onSearchRequest: keyword => {
      dispatch(searchActions.searchRequest(keyword));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Header));
