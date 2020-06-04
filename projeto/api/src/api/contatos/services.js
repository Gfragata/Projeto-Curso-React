const service = require('./scheme');

service.methods(['get', 'post', 'put']);

service.updateOptions({new: true, runValidators: true});

module.exports = service;