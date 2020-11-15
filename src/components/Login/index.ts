import {connect} from 'react-redux';
import {
  credentialSignInStart,
  googleSignInStart,
} from '../../redux/modules/user';
import Login from './Login';

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  credentialSignInStart: (email, password) =>
    dispatch(credentialSignInStart({email, password})),
});

export default connect(null, mapDispatchToProps)(Login);
