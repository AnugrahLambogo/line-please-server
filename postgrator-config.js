require('dotenv').config();


module.exports = {
  'migrationsDirectory': 'migrations',
  'driver': 'pg',
  'connectionString': process.env.DATABASE_URL || 'postgresql://anugrahlambogo@localhost/Line-Please',
  'ssl': !!process.env.SSL,
};

