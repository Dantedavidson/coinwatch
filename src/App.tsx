import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './Global.styles';
import { Header, Table, Search, PaginationBar } from './components';
import Api from './services/Api.service';

const Container = styled.div`
    width: 90%;
    margin: auto;
`;
interface Data {
    loading: boolean;
    results: any[];
    filteredResults: any[];
}
const App = () => {
    const [pagination, setPagination] = useState({ totalPages: 0, currentPage: 0 });
    const [data, setData] = useState<Data>({ loading: true, results: [], filteredResults: [] });

    useEffect(() => {
        Api.getTotalCoins().then((res) => {
            if (typeof res === 'string') {
                return null;
            }
            setPagination({ totalPages: Math.floor(res.length / 100), currentPage: 1 });
            return null;
        });
    }, []);
    useEffect(() => {
        setData((prev) => ({ ...prev, loading: true }));
        Api.getMarketInfo(pagination.currentPage).then((res) => {
            if (typeof res === 'string') {
                return null;
            }
            setData({ loading: false, results: res, filteredResults: res });
            return null;
        });
    }, [pagination.currentPage]);
    const handleResults = (filtered: any[]) => {
        setData((prev) => ({ ...prev, filteredResults: filtered }));
    };
    return (
        <>
            <GlobalStyles />
            <Header />
            <Container>
                <Search results={data.results} setResults={handleResults} />
                <Table display={data.filteredResults} loading={data.loading} />
                {!data.loading && (
                    <PaginationBar
                        count={pagination.totalPages}
                        current={pagination.currentPage}
                        setPagination={setPagination}
                    />
                )}
            </Container>
        </>
    );
};

export default App;
