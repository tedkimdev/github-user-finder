import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../../components/Header";
import { searchActions } from "../../store/modules/search";

class HeaderContainer extends Component {
  componentDidMount() {
    const { searchQuery } = this.props;
    this.handleSearchUser(searchQuery);
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.props;
    if (searchQuery !== prevProps.searchQuery) {
      this.handleSearchUser(searchQuery);
      window.scrollTo(0, 0);
    }
  }

  handleSearchUser = searchQuery => {
    if (!searchQuery) return;
    this.props.onSearchRequest(searchQuery);
  };

  render() {
    const { onSubmit, searchKeyword } = this.props;

    return <Header onSubmit={onSubmit} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchRequest: searchQuery => {
      dispatch(searchActions.searchRequest(searchQuery));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HeaderContainer);
