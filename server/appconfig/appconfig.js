 require('path');
 const extend = require('util')._extend;

 const defaults = {
   NODE_ENV: process.env.NODE_ENV,
 };

 const appConfig = {
   development: extend(require('./env/dev'), defaults),
 };
 const discourseKey = '884f5fecb1bd914314e33530f353ab1e7e7c5e77c4c4ad2e393333a1a0e60ff1';
 const discourseAdmin = 'calvin';

 const env = process.env.NODE_ENV || 'dev';

 process.stdout.write(`\nConfiguring for environment: ${env}`);

 const effectiveConfig = appConfig[env];


 process.stdout.write(`\nconfig settings: ${JSON.stringify(effectiveConfig)}\n`);

 module.exports = effectiveConfig;
