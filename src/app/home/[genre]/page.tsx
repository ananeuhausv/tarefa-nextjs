'use client'

import styles from './styles.module.css'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Livro } from '@/types/Livro'
import SearchBar from '@/components/SearchBar';
import BackToHomeButton from '@/components/BackToHomeButton';
import CardLivroGenrePage from '@/components/CardLivroGenrePage';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';

export default function GenrePage() {

    const params = useParams();
    const genero = params?.genre
    const [livros, setLivros] = useState<Livro[]>([]);
    const [filtro, setFiltro] = useState<string>("");

    const livrosFiltrados = livros.filter(livro =>
        livro.titulo.toLowerCase().includes(filtro.toLowerCase())
    );

    useEffect(() => {
        axios.get(`http://localhost:3000/livros?genero=${genero}`)
            .then(response => setLivros(response.data))
            .catch(error => console.error('Algo deu errado: ' + error))
    }, [genero])

    return(
        <>
            <Header/>
            
            <SearchBar onSearch={setFiltro}/>

            <BackToHomeButton text={`${genero}`}/>

            <div className={styles.genrePage}>
                <div className={styles.livrosContainer}>
                    {livrosFiltrados.length > 0 ? (
                        livrosFiltrados.map(livro => <CardLivroGenrePage key={livro.id} livro={livro} />)
                    ) : (
                        <p>Nenhum livro encontrado para esse gênero.</p>
                    )}
                </div>
            </div>
        </>
        
    )
}
