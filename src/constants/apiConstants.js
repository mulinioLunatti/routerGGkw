export default {
	development: {
		BASEURL:"http://192.168.60.24",
		PROTOCOL: 'http',
		HOSTNAME: "192.168.60.24",
		PATH:"/",
		PORT: 80,
	},
	production: {
		BASEURL:  "http://api.digifunction.com",
		PROTOCOL: 'http',
		HOSTNAME: "digifunction.com",
		PATH:"/api/",
		PORT: 80,
	}
}[process.env.NODE_ENV];