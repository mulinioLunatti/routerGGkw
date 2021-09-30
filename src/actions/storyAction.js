import axios from 'axios'
import {Deserializer} from "jsonapi-serializer";
import {SET_STORY_WRITE,SET_ERRORS_MESSAGE} from '../constants/actionTypesConstant'
import API_CONSTANTS from '../constants/apiConstants'
export const writeStory = ({data},onCallback)=> dispatch => {
	axios({
		method: 'post',
		url: '/api/story/write',
		data: {credential:localStorage.credential,...data,draftId:window.localStorage.getItem("latestDraft")},
		proxy: {
			host: API_CONSTANTS.HOSTNAME,
			port: API_CONSTANTS.PORT
		},
	}).then(
		({data}) => {
			// new Deserializer({keyForAttribute: "camelCase"}).deserialize(data, (error, []) => {
			// 	dispatch({
			// 		type: SET_STORY_WRITE,
			// 		payload: {}
			// 	});
			// });
			window.localStorage.removeItem("latestDraft");
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
export const getStories = (data,onCallback)=> dispatch => {
	axios({
		method: 'post',
		url: '/api/story/get',
		data: {credential:localStorage.credential},
		proxy: {
			host: API_CONSTANTS.HOSTNAME,
			port: API_CONSTANTS.PORT
		},
	}).then(
		({data}) => {
			// new Deserializer({keyForAttribute: "camelCase"}).deserialize(data, (error, []) => {
			new Deserializer({keyForAttribute: "camelCase"}).deserialize(data, (error, array) => {
				dispatch({
					type: SET_STORY_WRITE,
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
