import React from 'react';
import { Cabecalho } from '../components/Cabecalho';

export class HomePage extends React.Component {
    render(){
        return (
            <div className="container">
                <Cabecalho titulo="Seja Bem vindo"
                    subtitulo="ABC Cursos a melhor plataforma de cursos para o seu estudo" />
            </div>
        )
    }
}