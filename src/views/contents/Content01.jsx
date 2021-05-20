import React from "react";
import { useParams } from "react-router-dom";

const Content01 = (props) => {
    const { user } = useParams();

    return (
        <div>
            <h1>Conteúdo 01</h1>
            <h3>Usuário: {user}</h3>
        </div>
    );
};

export default Content01;
