export default {
	DEVELOPMENT: {
		API_PROTOCOL: 'http',
		API_HOSTNAME: "127.0.0.1",
		API_PORT: 8888,
		CDN_PROTOCOL: 'http',
		CDN_HOSTNAME: "127.0.0.1",
		CDN_PORT: 8888
	},
	PRODUCTION: {
		API_PROTOCOL: 'http',
		API_HOSTNAME: "victory.com",
		API_PORT: 8888,
		CDN_PROTOCOL: 'http',
		CDN_HOSTNAME: "cdn.victory.com",
		CDN_PORT: 8888
	}
}[process.env.NODE_ENV];