import axios from 'axios'
// import {Deserializer} from "jsonapi-serializer";
import {SET_ERRORS_MESSAGE,SET_DRAFT_GET} from '../constants/actionTypesConstant'
import {SET_DRAFT_WRITE} from '../constants/actionTypesConstant'
import API_CONSTANTS from '../constants/apiConstants'
import {Deserializer} from "jsonapi-serializer";
export const writeDraft =  ({data},onCallback)=> dispatch => {
	axios({
		method: 'post',
		url: '/draft/write',
		data: {credential:localStorage.credential,...data},
		headers:{
			'credential': localStorage.credential,
			"Access-Control-Allow-Headers":"*",
			"Strict-Origin-Cross-Origin":"*",
			"_id":window.localStorage.getItem("latestDraft")
		},
		proxy: {
			host: API_CONSTANTS.HOSTNAME,
			port: API_CONSTANTS.PORT
		},
	}).then(
		({data}) => {
			new Deserializer({keyForAttribute: "camelCase"}).deserialize(data, (error, []) => {
				window.localStorage.setItem("latestDraft",data["-id"]);
				dispatch({
					type: SET_DRAFT_WRITE,
					payload: {}
				});
			});
			typeof onCallback === 'function' && onCallback(data)
		}
	).catch(
		error => (error.response) ? ([500, 501, 502, 503, 504, 404].includes(error.response.status)) ? console.log(error.response.data) :
			dispatch({
				type: SET_ERRORS_MESSAGE,
				payload: error.response.data.errors
			}) : error.request ? console.log(error.request) : console.log("Error", error.message)
	)
}
export const getDrafts =  (data,onCallback)=> dispatch => {
	axios({
		method: 'post',
		url: '/draft/get',
		data: {credential:localStorage.credential},
		headers:{
			'credential': localStorage.credential,
			"Access-Control-Allow-Headers":"*",
			"Strict-Origin-Cross-Origin":"*"
		},
		proxy: {
			host: API_CONSTANTS.HOSTNAME,
			port: API_CONSTANTS.PORT
		},
	}).then(
		({data}) => {
			new Deserializer({keyForAttribute: "camelCase"}).deserialize(data, (error, array) => {
				dispatch({
					type: SET_DRAFT_GET,
					payload: {}
				});
				typeof onCallback === 'function' && onCallback(data)
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
