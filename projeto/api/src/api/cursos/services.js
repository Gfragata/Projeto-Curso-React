const service = require('./schema');

service.methods(['get', 'post', 'put', 'delete']);
service.updateOptions({new: true, runValidators: true});

module.exports = service;