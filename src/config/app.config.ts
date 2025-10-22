export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGO_URI,
  port: process.env.PORT || 3001,
});
