const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3030,
  jwtSecret: process.env.JWT_SECRET || 'mongodb+srv://STrody:<1Fb9CQpFiQ7pM9JB>@cluster0-nybw4.mongodb.net/test',
  mongoUri: process.env.MONGODB_URI
    || process.env.MONGO_HOST
    || `mongodb://${process.env.IP || 'localhost'}:${
    process.env.MONGO_PORT || '27017'
    }/mernproject`,
};

export default config;
