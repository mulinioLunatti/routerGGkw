export default {
	DEVELOPMENT: {
		PROTOCOL: 'http',
		HOSTNAME: "127.0.0.1",
		PORT: 8888,

	},
	PRODUCTION: {
		PROTOCOL: 'http',
		HOSTNAME: "victory.com",
		PORT: 8888,

	}
}[process.env.NODE_ENV];