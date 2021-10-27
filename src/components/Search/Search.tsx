import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
    results: any[];
    setResults: (filtered: any[]) => void;
}

const Input = styled.input`
    padding: 2px;
    width: 15rem;
    margin-bottom: 1.5rem;
    border: 0 transparent;
    border-radius: 2px;
    outline: none;
`;

const Search = ({ results, setResults }: Props) => {
    const [input, setInput] = useState('');
    const filterResults = (value: string) => {
        const filtered = [];
        for (let i = 0; i < results.length; i += 1) {
            if (
                results[i].name.toLowerCase().includes(value.toLowerCase()) ||
                results[i]?.symbol.toLowerCase().includes(value.toLowerCase())
            ) {
                filtered.push(results[i]);
            }
        }
        return filtered;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        setResults(filterResults(e.target.value));
    };
    return (
        <Input
            placeholder="Filter by name or symbol"
            value={input}
            onChange={(e) => handleChange(e)}
        />
    );
};

export default Search;
