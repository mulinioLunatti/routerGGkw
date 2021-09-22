import {connect} from 'react-redux';
import {
    confirmToken
} from '../actions/tokenAction';

import TokenProvider from '../providers/TokenProvider'
export default connect(({errorReducer, tokenReducer}) => ({
    error: errorReducer,
    user: tokenReducer
}), {
    confirmToken
})(TokenProvider);
