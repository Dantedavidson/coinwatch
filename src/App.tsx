import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './Global.styles';
import { DataState } from './types';
import { Header, Table, Search, PaginationBar, Tabs, ErrorTab } from './components';
import Api from './services/Api.service';

const Container = styled.div`
    width: 90%;
    margin: auto;
`;

const initial: DataState = {
    type: 'market_cap_desc',
    loading: true,
    error: false,
    results: [],
    filteredResults: [],
};
const App = () => {
    const [pagination, setPagination] = useState({ totalPages: 0, currentPage: 0 });
    const [data, setData] = useState<DataState>(initial);

    useEffect(() => {
        Api.getTotalCoins().then((res) => {
            if (typeof res === 'string') {
                setData((prev) => ({ ...prev, loading: false, error: true }));
            }
            setPagination({ totalPages: Math.floor(res.length / 100), currentPage: 1 });
            return null;
        });
    }, []);
    useEffect(() => {
        setData((prev) => ({ ...prev, loading: true }));
        Api.getMarketInfo(pagination.currentPage, data.type).then((res) => {
            if (typeof res === 'string') {
                return setData((prev) => ({ ...prev, loading: false, error: true }));
            }
            setData((prev) => ({
                ...prev,
                loading: false,
                error: false,
                results: res,
                filteredResults: res,
            }));
            return null;
        });
    }, [pagination.currentPage, data.type]);

    const refreshData = async () => {
        try {
            const total = await Api.getTotalCoins();
            const result = await Api.getMarketInfo(1, data.type);
            if (typeof result === 'string' || typeof total === 'string') throw new Error();
            setPagination({ totalPages: Math.floor(total.length / 100), currentPage: 1 });
            setData((prev) => ({
                ...prev,
                loading: false,
                error: false,
                results: result,
                filteredResults: result,
            }));
        } catch (err) {
            setData((prev) => ({ ...prev, loading: false, error: true }));
        }
    };
    const handleResults = (filtered: any[]) => {
        setData((prev) => ({ ...prev, filteredResults: filtered }));
    };
    return (
        <>
            <GlobalStyles />
            <Header />
            <Container>
                {data.error ? (
                    <ErrorTab onClickHandler={refreshData} />
                ) : (
                    <>
                        <Search results={data.results} setResults={handleResults} />
                        <Tabs onClickHandler={setData} current={data.type} />
                        <Table display={data.filteredResults} loading={data.loading} />
                        {!data.loading && (
                            <PaginationBar
                                count={pagination.totalPages}
                                current={pagination.currentPage}
                                setPagination={setPagination}
                            />
                        )}
                    </>
                )}
            </Container>
        </>
    );
};

export default App;
