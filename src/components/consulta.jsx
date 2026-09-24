import { Contato } from "./Contato";
import { useEffect, useState } from "react";

export function Consulta() {
    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        async function fectContatos() {
            try {
                const response = await fetch("http://localhost:3000/contatos");
                if (!response.ok) {
                  throw new Error("Erro ao buscar os contatos");
                }

                const data = await response.json();
                setContatos(data);
            } catch (error) {
                console.error("Erro ao buscar os contatos", error);
            }
        }

        fectContatos();
    }, []);

    return (
        <div>
            <h2>Lista de contatos</h2>

            {contatos.map((contato, index) => {
                return (
                <Contato
                    key={index}
                    nome={contato.nome}
                    endereco={contato.endereco}
                    telefone={contato.telefone}
                 />
                );
            })}
        </div>
    );
}