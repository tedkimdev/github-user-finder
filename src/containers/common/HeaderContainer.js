import Header from "../../components/Header";
import { connect } from "react-redux";

import { searchActions } from "../../store/ducks/search";

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
)(Header);
