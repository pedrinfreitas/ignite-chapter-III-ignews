import { signIn, useSession } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const [session] = useSession();

    async function clickSubscrible() {
        if (!session) {
            signIn('github')
            return;
        }

        try {
            const response = await api.post('/subscrible');

            const { sessionId } = response.data;

            const stripe = await getStripeJs();

            await stripe?.redirectToCheckout({ sessionId });
        } catch (err: any) {
            alert(err.message)
        }

    }

    return (
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={clickSubscrible}
        >
            Inscreva-se

        </button>
    )


}