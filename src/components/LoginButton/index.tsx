import styles from './styles.module.css'

interface LoginButtonProps {
    isSubmitting: boolean;
}

export default function LoginButton({ isSubmitting }:LoginButtonProps) {
    
    return(
        <>
            <div className={styles.buttons}>
                <button 
                    disabled={isSubmitting}
                    className={styles.primaryButton}>
                    {isSubmitting ? 'Entrando...' : 'Entrar'}
                </button>
                <button className={styles.secondaryButton}>
                    Cadastre-se
                </button>
            </div>
        </>
    )
}
