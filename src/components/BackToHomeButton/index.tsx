import styles from './styles.module.css'
import { useRouter } from 'next/navigation';

interface BackToHomeButtonProps {
    text: string;
}

export default function BackToHomeButton({ text }: BackToHomeButtonProps) {

    const router = useRouter();
    
    function handleClick() {
        router.push(`/home`)
    }

    const decodedText = decodeURIComponent(text);

    return (
        <div className={styles.detailsButton}>
            <button onClick={handleClick}> {decodedText}</button>
        </div>
    )
}