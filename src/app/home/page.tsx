'use client'

import style from './styles.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import banner from '@/assets/bannerArea.png';
import axios from 'axios';
import CardGenero from '@/components/CardGenero';
import { Livro } from '@/types/Livro';
import Header from '@/components/Header';

export default function HomePage() {

    const [livros, setLivros] = useState<Livro[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/livros')
            .then(response => setLivros(response.data))
            .catch(error => console.error('Algo deu errado: ' + error))
    }, [])

    const livrosPorGenero: { [key: string]: Livro[] } = livros.reduce((acc, livro) => {
        if (!livro.genero) return acc;

        acc[livro.genero] = acc[livro.genero] || []
        acc[livro.genero].push(livro)

        return acc
    }, {} as { [key: string ]: Livro[] })

    return (
        <>
            <Header/>
            <div className={style.banner}>
                <Image src={banner} alt="banner do site, informando 25% de desconto nos livros do Paulo Coelho" />
            </div>

            {Object.keys(livrosPorGenero).map(genero => (
                <CardGenero key={genero} genero={genero} livros={livrosPorGenero[genero]} />
            ))}
        </>
    );
}