/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'en',
        localeDetection: false,
    },

    async rewrites() {
        return [
            {
                source: '/api_qrmenu/v1/:path*',
                destination: `${process.env.DESTINATION}*`,
            },
        ];
    },
};

export default nextConfig;