export default {
	development: {
		BASEURL:"http://api.digifunction.com",
		PROTOCOL: 'http',
		HOSTNAME: "api.digifunction.com",
		PORT: 80,
	},
	production: {
		PROTOCOL: 'http',
		HOSTNAME: "api.digifunction.com",
		PORT: 80,
	}
}[process.env.NODE_ENV];