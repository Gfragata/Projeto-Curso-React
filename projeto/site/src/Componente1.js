import React from 'react';
import { ListaItem } from './ListaItem';


export default class Comp1 extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        count: 0,
        lista: ['Teste1', 'Teste2', 'Teste3']
    }

    escreverSpan() {
        return <span>Meu Primeiro componente alterado</span>;
    }

    showClicks() {
        this.setState({ count: this.state.count + 1 });
    }

    componentWillMount() {
        console.log("ComponenteWillMount chamado");
    }

    componentDidMount() {
        console.log("componentDidMount chamado");
    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps chamado");
    }

    shouldComponentUpdate() {
        console.log("componentShouldUpdate chamado");
        return true;
    }

    componentWillUpdate() {
        console.log("ComponentWillUpdate chamado");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate chamado");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount chamado");
    }

    render() {
        console.log("render chamado")
        const { count, lista } = this.state;
        return (
            <div>
                <h1>{this.escreverSpan()}</h1>
                <button onClick={this.showClicks.bind(this)}
                    className={count > 2 ? "click5x" : ""}>Click Me</button>
                <h3>Fui clicado {count} vezes</h3>
                <ul>
                    {lista.map((item, indice) => <ListaItem key={indice} texto={item} />)}
                </ul>
            </div>
        );
    }
}