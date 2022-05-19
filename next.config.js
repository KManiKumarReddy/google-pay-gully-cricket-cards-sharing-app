const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: 'public',
    },
    images: {
        domains: ['www.gstatic.com', 'www.wtfpl.net'],
    },
})