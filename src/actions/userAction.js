import axios from 'axios'
import {Deserializer} from "jsonapi-serializer";
import {SET_USER_SIGN_UP,SET_ERRORS_MESSAGE} from '../constants/actionTypesConstant'
import API_CONSTANTS from '../constants/apiConstants'
export const singUpUser = ({userEmail, userPlanPassword, userFirstName, userLastName},onCallback)=> dispatch => {
	console.log(API_CONSTANTS.HOSTNAME,API_CONSTANTS.PORT)
	axios({
		method: 'post',
		url: '/user/signup',
		data: {userEmail, userPlanPassword, userFirstName, userLastName},
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
export const checkUser = ({userEmail}, onSuccess , onError)=>{
	axios({
		method: 'post',
		url: '/user/check',
		data: {userEmail},
		proxy: {
			host: API_CONSTANTS.HOSTNAME,
			port: API_CONSTANTS.PORT
		},
	}).then(({data})=>{
		typeof onSuccess === 'function' && onSuccess();
		window.localStorage.setItem("verified", "true");
	}).catch(error=>{
		typeof onError === 'function' && onError(error);
		// window.localStorage.setItem("verified", true);
	})
}
