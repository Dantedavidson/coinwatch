import React, { useState, useEffect } from 'react';
import GlobalStyles from './Global.styles';
import { Header, Table, Search } from './components';
import Api from './services/Api.service';

interface Data {
    results: any[];
    filteredResults: any[];
}
const App = () => {
    const [pagination, setPagination] = useState({ totalPages: 0, currentPage: 0 });
    const [data, setData] = useState<Data>({ results: [], filteredResults: [] });

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
            setData({ results: res, filteredResults: res });
            return null;
        });
    }, []);
    const handleResults = (filtered: any[]) => {
        setData((prev) => ({ ...prev, filteredResults: filtered }));
    };
    return (
        <>
            <GlobalStyles />
            <Header />
            <Search results={data.results} setResults={handleResults} />
            <div>
                <Table display={data.filteredResults} loading={false} />
            </div>
        </>
    );
};

export default App;
