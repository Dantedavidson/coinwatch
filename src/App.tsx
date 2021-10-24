import React, { useState, useEffect } from 'react';
import GlobalStyles from './Global.styles';
import { Header, Table } from './components';
import Api from './services/Api.service';

const App = () => {
    const [pagination, setPagination] = useState({ totalPages: 0, currentPage: 0 });
    const [results, setResults] = useState<any[]>([]);
    useEffect(() => {
        Api.getTotalCoins().then((res) => {
            if (typeof res === 'string') {
                console.log('error');
                return null;
            }
            setPagination({ totalPages: Math.ceil(res.length / 100), currentPage: 1 });
            return null;
        });
        Api.getMarketInfo(1).then((res) => {
            if (typeof res === 'string') {
                console.log('error');
                return null;
            }
            setResults(res);
            return null;
        });
    }, []);
    useEffect(() => {
        console.log(pagination);
        console.log(results);
    }, [pagination, results]);

    return (
        <>
            <GlobalStyles />
            <Header />
            <div>
                <Table results={results} loading={false} />
            </div>
        </>
    );
};

export default App;
