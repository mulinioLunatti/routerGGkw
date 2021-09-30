import {connect} from 'react-redux';
import {
   writeDraft,
	getDrafts,
	getSingleDraft,
} from '../actions/draftAction';

import DraftProvider from '../providers/DraftProvider'

export default connect(({errorReducer, draftReducer}) => ({
	error: errorReducer,
	draft: draftReducer
}), {
	writeDraft,
	getDrafts,
	getSingleDraft,
})(DraftProvider);
