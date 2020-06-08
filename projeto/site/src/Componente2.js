import React, { useState, useEffect } from 'react';
import { ListaItem } from './ListaItem';

export const Comp2 = () => {
    console.log('Comp2 chamado')
    const [count, setCount] = useState(0);
    const [lista] = useState(['Teste1', 'Teste2', 'Teste3']);

    // executa quando terminar de montar e terminar de atualizar
    useEffect(() => {
        console.log('useEffect chamado')
        document.title = `Você clicou ${count} vezes`;
    });

    // executa quando terminar de montar e terminar de atualizar
    // executa quando componente for desmontado
    useEffect(() => {
        console.log('useEffect montagem chamado');
        // Especifique como limpar depois desse efeito:
        return function cleanup() {
            console.log('useEffect desmontar chamado');
        };
    });

    const doClick = () => {
        setCount(count + 1);
        setA(2);
    }

    const [a, setA] = useState(1);
    const [b, setB] = useState(2);
    useEffect(
        () => {
            setB(3)
        },
        [a],
    )
    useEffect(
        () => {
            console.log('atualizou o b');
        },
        [b],
    )

    return (
        <div>
            <h1>Meu Segundo Componente</h1>
            <button onClick={doClick}
                className={count > 2 ? "click5x" : ""}>Click Me</button>
            <h3>Fui clicado {count} vezes</h3>
            <ul>
                {lista.map((item, indice) => <ListaItem key={indice} texto={item} />)}
            </ul>
        </div>
    );
}