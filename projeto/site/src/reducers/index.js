import {combineReducers} from 'redux';

import contatoReducer from './contato';
import cursosReducer from './curso';

const reducers = combineReducers({
    contato: contatoReducer,
    cursos: cursosReducer
});

export default reducers;