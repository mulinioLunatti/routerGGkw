import axios from 'axios'
// import {Deserializer} from "jsonapi-serializer";
import {SET_ERRORS_MESSAGE,SET_DRAFT_GET} from '../constants/actionTypesConstant'
import {SET_DRAFT_WRITE} from '../constants/actionTypesConstant'
import API_CONSTANTS from '../constants/apiConstants'
import {Deserializer} from "jsonapi-serializer";
export const writeDraft =  ({data},onCallback)=> dispatch => {
	let sendData={};
	if(window.localStorage.getItem("latestDraft") && window.localStorage.getItem("latestDraft").length>0 && window.localStorage.getItem("latestDraft")!=="undefined"){
		sendData={credential:localStorage.credential,...data,"_id":window.localStorage.getItem("latestDraft")}
	}else{
		sendData={credential:window.localStorage.credential,...data};
	}

	console.log(sendData);
	axios({
		method: 'post',
		url: '/draft/write',
		data:sendData,
		headers:{
			'credential': localStorage.credential,
			"Access-Control-Allow-Headers":"*",
			"Strict-Origin-Cross-Origin":"*",

		},
		proxy: {
			host: API_CONSTANTS.HOSTNAME,
			port: API_CONSTANTS.PORT
		},
	}).then(
		({data}) => {
			typeof onCallback === 'function' && onCallback(data)
			console.log(data["_id"]);
			window.localStorage.setItem("latestDraft",data["_id"]);
			dispatch({
				type: SET_DRAFT_WRITE,
				payload: {}
			});
			// new Deserializer({keyForAttribute: "camelCase"}).deserialize(data, (error, []) => {
			// });

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
export const getSingleDraft =  ({id},onCallback)=> dispatch => {
	axios({
		method: 'post',
		url: '/draft/read',
		data: {credential:localStorage.credential,_id:id},
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
			// typeof onCallback === 'function' && onCallback(data)
			new Deserializer({keyForAttribute: "camelCase"}).deserialize(data, (error, array) => {
				typeof onCallback === 'function' && onCallback(data)
				dispatch({
					type: SET_DRAFT_GET,
					payload: {}
				});
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
