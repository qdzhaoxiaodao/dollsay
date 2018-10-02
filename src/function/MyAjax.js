import axios from "axios"
export default {
	axiosGet(url, paramsObj, successCallback, failCallBack) {
		axios.get(url, paramsObj)
			.then(function(response) {
				successCallback(response);
			})
			.catch(function(err) {
				failCallBack(err);
			});
	},
	axiosPost(url, paramsObj,successCallback, failCallBack) {
		axios.post(url, paramsObj)
			.then(function(res) {
				successCallback(res);
			})
			.catch(function(err) {
				failCallBack(err);
			});
	},
}