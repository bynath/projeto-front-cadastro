import { Link } from "react-router-dom";
import styles from './home.module.css';

export function Home() {
    return (
        <div>
            <h2>Sistema de Contatos</h2>

            <div className= {styles.context}></div>

            <div className= {styles.context}>
                <Link to="/cadastro">Cadastro</Link>
            </div>

            <div className= {styles.context}>
                <Link to="/consulta">Consulta</Link>
            </div>
        </div>
    );
}