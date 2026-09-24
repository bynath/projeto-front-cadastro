import styles from './Cadastro.module.css';
import { useState } from 'react';

export function Cadastro() {
    const [formData, setFormData] = useState({
        nome: '',
        endereco: '',
        telefone: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(
            `Nome: ${formData.nome}, Endereço: ${formData.endereco}, Telefone: ${formData.telefone}`
        );
    };

    return (
        <div>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit} className={styles.commentForm}>
                <input
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                required
                />

                <input
                name="endereco"
                placeholder="Endereço"
                value={formData.endereco}
                onChange={handleChange}
                required
                />

                <input
                name="telefone"
                placeholder="Telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                />

                <footer>
                    <button type="submit">Salvar</button>
                </footer>
            </form>
        </div>
    );
}