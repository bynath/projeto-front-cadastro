import styles from './sidebar.module.css';
import dev from '../assets/developer.png';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={dev} alt="Desenvolvedor" />
            <div className={styles.profile}>
                <strong>Nathalia Almeida</strong>
                <span>Desenvolvedora Front-End</span>
            </div>
        </aside>
    );
}