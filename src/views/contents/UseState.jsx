import React, { useState } from "react";
import "./UseState.css";

const UseState = (props) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div>
            <div className='title'>
                <h1>useState</h1>
                <h2>Manipula Estados em componentes funcionais</h2>
            </div>

            <div className='conteudo'>
                <input
                    type='text'
                    className='field'
                    value={name}
                    placeholder='Digite seu nome'
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type='text'
                    className='field'
                    value={surname}
                    placeholder='Digite seu sobrenome'
                    onChange={(e) => setSurname(e.target.value)}
                />

                <button
                    className='button'
                    onClick={() =>
                        setMessage(`Olá ${name} ${surname}, seja bem-vindo!`)
                    }
                >
                    Ok
                </button>

                <p className='field'>{message}</p>
            </div>
        </div>
    );
};

export default UseState;
