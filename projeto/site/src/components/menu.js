import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Menu = props => {
    const{cursos} = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                ABC Cursos
        </Link>
            <button className="navbar-toggler" type="button"
                data-toggle="collapse"
                data-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/cursos">Cursos{curso && curso.length > 0 ? `(${curso.length})` : ''}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contato">Contato</Link>
                    </li>
                </ul> </div>
        </nav>
    )
};

const mapStoreToProps = store => ({
    curso: store.cursos.lista
});

const conectado = connect(mapStoreToProps, null)(Menu);
export { conectado as Menu};