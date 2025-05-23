import styles from './styles.module.css'
import { useRouter } from 'next/navigation';

interface CardLivroGenrePageProps {
    livro: {
        id: number;
        titulo: string;
        autor: string;
        preco: number;
        capa: string;
    }
}

export default function CardLivroGenrePage( { livro }: CardLivroGenrePageProps) {

    const router = useRouter();

    function handleClick() {
        router.push(`/home/details/${livro.id}`)
    }

    return (
        <div className={styles.card} onClick={handleClick} role='button' tabIndex={0}>
            <div className={styles.bookCover}>
                <img src={livro.capa} alt={`Capa do livro ${livro.titulo}`} />
            </div>
            <div className={styles.about}>
                <div>
                   <h4>{livro.titulo}</h4>
                    <p>{livro.autor}</p> 
                </div>
                <p>R$ {livro.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            </div>
        </div>
    )
}