import styles from './styles.module.css';
import { Livro } from '@/types/Livro';

interface AddToCartButtonProps {
    livro: Livro;
}

export default function AddToCartButton({ livro }: AddToCartButtonProps) {

    return (
        <div className={styles.buttonContainer}>
            <button 
                className={styles.cart}
            >
                <span 
                    className={styles.price}>
                        R$ {livro.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
                <span 
                    className={styles.text}>
                        Adicionar ao carrinho
                </span> 
            </button>
        </div>
        
    )
}