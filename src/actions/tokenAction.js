import axios from 'axios'
import {Deserializer} from "jsonapi-serializer";
import {SET_TOKEN_CONFIRM, SET_ERRORS_MESSAGE, END_USER_CREDENTIAL} from '../constants/actionTypesConstant'
import API_CONSTANTS from '../constants/apiConstants'
export const logOutUser = () => dispatch => {
	localStorage.removeItem("credential");
	dispatch({type: END_USER_CREDENTIAL});
};
export const verifyToken = ({tokenUserEmail,tokenType,tokenService,tokenAgent},onCallback)=> dispatch => {
	axios({
		method: 'post',
		url: `${API_CONSTANTS.PATH}token/verify`,
		data: {tokenUserEmail,tokenType,tokenService,tokenAgent},
		proxy: {
			host: API_CONSTANTS.HOSTNAME,
			port: API_CONSTANTS.PORT
		},
	}).then(
		({data}) => {
			// new Deserializer({keyForAttribute: "camelCase"}).deserialize(data, (error, []) => {
			new Deserializer({keyForAttribute: "camelCase"}).deserialize(data, (error, array) => {
				dispatch({
					type: SET_TOKEN_CONFIRM,
					payload: {}
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
export const sendToken=({tokenUserEmail,tokenType,tokenService,tokenAgent},onCallback)=> dispatch => {
	axios({
		method: 'post',
		url: `${API_CONSTANTS.PATH}token/send`,
		data: {userEmail:tokenUserEmail,tokenType,tokenService,tokenAgent},
		proxy: {
			host: API_CONSTANTS.HOSTNAME,
			port: API_CONSTANTS.PORT
		},
	}).then(
		({data}) => {
			onCallback && onCallback()
		}
	).catch(
		error => (error.response) ? ([500, 501, 502, 503, 504, 404].includes(error.response.status)) ? console.log(error.response.data) :
			dispatch({
				type: SET_ERRORS_MESSAGE,
				payload: error.response.data.errors
			}) : error.request ? console.log(error.request) : console.log("Error", error.message)
	)
}
