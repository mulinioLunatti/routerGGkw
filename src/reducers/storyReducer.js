import {SET_STORY_WRITE} from '../constants/actionTypesConstant'
const initialState={}
export default function storyReducer(state= initialState,action){
	switch (action.type){
		case "SET_STORY_WRITE":
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