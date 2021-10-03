import {SET_TOKEN_CONFIRM, SET_TOKEN_SENT,SET_TOKEN_EMAIL_STATUS} from '../constants/actionTypesConstant'
const initialState={tokenEmailStatus:null}
export default function tokenReducer(state= initialState,action){
	switch (action.type){

		case SET_TOKEN_EMAIL_STATUS:
			console.log(SET_TOKEN_EMAIL_STATUS)
			return{
				...state,
				tokenEmailStatus:action.payload,
				tokenActionType: SET_TOKEN_EMAIL_STATUS
			}
		case SET_TOKEN_CONFIRM:
			return{
				...state,
				...action.payload,
				tokenActionType: SET_TOKEN_SENT
			}
		default:
			return {
				...state
			}
	}
}