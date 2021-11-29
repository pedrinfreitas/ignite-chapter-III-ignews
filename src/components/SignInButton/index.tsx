import { signIn, signOut, useSession } from 'next-auth/client';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export function SignInButton() {
    const [session] = useSession();
    return (
        <button
            type="button"
            className={styles.sigInButton}
            onClick={() => !session ? signIn('github') : signOut()}
        >
            <FaGithub className={session ? styles.svgColorActive : styles.svgColorDeactive} />
            {session ? session.user?.name : "Sign in with Github"}
            {session && <FiX className={styles.closeIcon} />}
        </button>
    )
}