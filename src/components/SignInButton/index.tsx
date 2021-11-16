import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';


export function SignInButton() {
    const isUserLoggedIn = false;

    return (
        <button
            type="button"
            className={styles.sigInButton}
        >
            <FaGithub className={isUserLoggedIn ? styles.svgColorActive : styles.svgColorDeactive} />
            {isUserLoggedIn ? "Pedro Freitas" : "Sign in with Github"}
            {isUserLoggedIn && <FiX className={styles.closeIcon} />}
        </button>
    )
}