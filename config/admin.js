module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cff97c9ba3f4d294182e9c4d9bc1b83f'),
  },
});
