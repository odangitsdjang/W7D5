import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SessionForm from './session_form';
import { login, signup } from '../actions/session_actions';
// match.path or location.pathname?
// location.pathname gets rid of www.appacademy.io in www.appacademy.io/hello/world
const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  formType:   ownProps.match.path === "/login"  ? "login" : "signup"
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = ownProps.match.path === "/login" ? login : signup ;
  return { processForm: (user) => dispatch(processForm(user))};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
