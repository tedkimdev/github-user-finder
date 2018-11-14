import UserList from "../../components/UserList";
import { connect } from "react-redux";

// profile actions

const mapStateToProps = state => {
  return { users: state.search.users };
};

export default connect(
  mapStateToProps,
  null
)(UserList);
