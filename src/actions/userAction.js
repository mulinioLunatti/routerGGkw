import axios from 'axios'
import {Deserializer} from "jsonapi-serializer";
import {SET_USER_SIGN_UP,SET_ERRORS_MESSAGE} from '../constants/actionTypesConstant'
import API_CONSTANTS from '../constants/apiConstants'
export const singUpUser = ({emailUser,passwordUser,firstNameUser,lastNameUser},onCallback)=> dispatch => {
	axios({
		method: 'post',
		url: '/user/signup',
		data: {emailUser,passwordUser,firstNameUser,lastNameUser},
		proxy: {
			host: API_CONSTANTS.HOSTNAME,
			port: API_CONSTANTS.PORT
		},
	}).then(
		({data}) => {
			new Deserializer({keyForAttribute: "camelCase"}).deserialize(data, (error, [{userCredential}]) => {
				localStorage.setItem('credential', userCredential);
				dispatch({
					type: SET_USER_SIGN_UP,
					payload: {userCredential}
				});
				typeof onCallback === 'function' && onCallback()
			});
		}
	).catch(
		error => (error.response) ? ([500, 501, 502, 503, 504, 404].includes(error.response.status)) ? console.log(error.response.data) :
			dispatch({
				type: SET_ERRORS_MESSAGE,
				payload: error.response.data.errors
			}) : error.request ? console.log(error.request) : console.log("Error", error.message)
	)
}