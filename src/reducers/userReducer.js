import {SET_USER_SIGN_UP} from '../constants/actionTypesConstant'
const initialState={}
export default (state= initialState,action)=>{
    switch (action.type){
        case "SET_USER_SIGN_UP":
            return{
                ...state,
                current:{...action.payload}
            }
        default:
            return {
                ...state
            }
    }
}