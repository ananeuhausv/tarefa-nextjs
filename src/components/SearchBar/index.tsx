'use client'

import { useState } from "react"
import styles from './styles.module.css'

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void}) {

    const [query, setQuery] = useState("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value)
        onSearch(e.target.value)
    }

    return (
        <div className={styles.searchBar}>
            <input 
                type="text"
                placeholder="Pesquisar por título"
                value={query}
                onChange={handleChange}
            />
        </div>
    )
}