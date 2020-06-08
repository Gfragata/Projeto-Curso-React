import React from 'react';

export const ListaItem = (props) =>(
    <li>{props && props.texto? props.texto:''}</li>
);