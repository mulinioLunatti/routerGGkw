export default {
	development: {
		BASEURL:"http://192.168.60.24:8888",
		PROTOCOL: 'http',
		HOSTNAME: "192.168.60.24",
		PORT: 8888,
	},
	production: {
		PROTOCOL: 'http',
		HOSTNAME: "victory.com",
		PORT: 8888,
	}
}[process.env.NODE_ENV];