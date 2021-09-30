export default {
	development: {
		BASEURL:"http://api.digifunction.com",
		PROTOCOL: 'http',
		HOSTNAME: "http://api.digifunction.com",
		PORT: 80,
	},
	production: {
		PROTOCOL: 'http',
		HOSTNAME: "http://api.digifunction.com",
		PORT: 80,
	}
}[process.env.NODE_ENV];