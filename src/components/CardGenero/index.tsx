'use client'

import CardLivro from '@/components/CardLivro';
import style from './styles.module.css';
import { Livro } from '@/types/Livro';
import { useRouter } from 'next/navigation';

interface CardGeneroProps {
    genero: string;
    livros: Livro[];
}

export default function CardGenero({ genero, livros }: CardGeneroProps) {

    const router = useRouter();

    function handleClick() {
        router.push(`/home/${genero}`)
    }

    const livrosFiltrados = livros.filter(livro => livro.genero === genero).slice(0,4)

    return (
        <>
            <div className={style.card}>
                <div className={style.about}>
                   <h1>{genero}</h1>
                    <p onClick={handleClick}>Ver mais</p> 
                </div>
                <div className={style.livros}>
                    {livrosFiltrados.map(livro => (
                        <CardLivro key={livro.id} livro={livro}/>
                    ))}
                </div>
            </div>
        </>
    )
}