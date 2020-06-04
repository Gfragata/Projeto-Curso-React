const express = require('express');

module.exports = function(server){
    const routes = express.Router();

    server.use('/api', routes);

    //serviços
    const cursosService = require('../api/cursos/services');
    const contatoService = require('../api/contatos/services');

    cursosService.register(routes, '/cursos');
    contatoService.register(routes, '/contatos');
}