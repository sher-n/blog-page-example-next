/** @type {import('next').NextConfig} */
module.exports = {
    theme: {
        extend: {
          colors: {
            'maqe-blue': '#CCECFF',
          },
        }
      },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          pathname: '/id/**/**/**',
        },
        {
            protocol: 'https',
            hostname: 'randomuser.me',
            pathname: '/api/portraits/men/**',
          },
      ],
    },
  }


