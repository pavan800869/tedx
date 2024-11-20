// next.config.js
module.exports = {
    
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**', // This allows all paths from the Unsplash domain
            },
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
                port: '',
                pathname: '/**', // This allows all paths from the Unsplash domain
            },
        ],
    },
};