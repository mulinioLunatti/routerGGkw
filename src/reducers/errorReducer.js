import {SET_ERRORS_MESSAGE} from "../constants/actionTypesConstant";

export default function errorReducer (state=[],action){
    switch (action.type){
        case SET_ERRORS_MESSAGE:
            return [
                ...state,
                ...action.payload
            ]
        default:
            return[]
    }
}