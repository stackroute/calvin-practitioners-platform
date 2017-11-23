 require('path');
 const extend = require('util')._extend;

 const defaults = {
   NODE_ENV: process.env.NODE_ENV,
 };

 const appConfig = {
   development: extend(require('./env/dev'), defaults),
 };

 const env = process.env.NODE_ENV || 'development';

 process.stdout.write(`\nConfiguring for environment: ${env}`);

 const effectiveConfig = appConfig[env];


 process.stdout.write(`\nconfig settings: ${JSON.stringify(effectiveConfig)}\n`);

 module.exports = effectiveConfig;
