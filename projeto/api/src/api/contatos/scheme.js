const restful = require('node-restful');

const contatoSchema = new restful.mongoose.Schema({
    data: { type: Date, require: true},
    nome: { type: String, require: true},
    email: {type: String, require: true},
    curso:{type: Object, require: false},
    assunto: { type: String, require: true},
    respondido:{type: Boolean,require:true, default: false}
});

module.exports = restful.model('contatos', contatoSchema);