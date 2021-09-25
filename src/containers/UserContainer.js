import {connect} from 'react-redux';
import {
	singUpUser,
	singInUser
} from '../actions/userAction';

import UserProvider from '../providers/UserProvider'

export default connect(({errorReducer, userReducer}) => ({
	error: errorReducer,
	user: userReducer
}), {
	singUpUser,
	singInUser
})(UserProvider);
