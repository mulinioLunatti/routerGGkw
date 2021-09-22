import {SET_TOKEN_CONFIRM} from '../constants/actionTypesConstant'
const initialState={}
export default (state= initialState,action)=>{
	switch (action.type){
		case "SET_TOKEN_CONFIRM":
			return{
				...state,
				...action.payload
			}
		default:
			return {
				...state
			}
	}
}