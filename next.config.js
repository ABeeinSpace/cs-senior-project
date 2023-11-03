/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
	async rewrites() {
		return [
			// Rewrite everything else to use `pages/index`
			{
				source: '/:path*',
				destination: '/',
			},
		];
	},

	distDir: 'build',
};

