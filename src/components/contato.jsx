import styles from './contato.module.css';

export function Contato(props) {
    return (
        <div className={styles.content}>
            <div className={styles.field}>
                <p>
                    <strong>Nome:</strong> {props.nome}
                </p>
                
                <p>
                    <strong>Endereço:</strong> {props.endereco}
                </p>
                <br />
                <p>
                    <strong>Telefone:</strong> {props.telefone}
                </p>
                
            </div>
        </div>
    );
}