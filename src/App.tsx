import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './Global.styles';
import { Header, Table, Search, PaginationBar, ErrorTab } from './components';
import Api from './services/Api.service';

const Container = styled.div`
    width: 90%;
    margin: auto;
`;
export interface Data {
    type: 'market_cap_desc' | 'volume_desc';
    loading: boolean;
    error: boolean;
    results: any[];
    filteredResults: any[];
}
const initial: Data = {
    type: 'market_cap_desc',
    loading: true,
    error: false,
    results: [],
    filteredResults: [],
};
const App = () => {
    const [pagination, setPagination] = useState({ totalPages: 0, currentPage: 0 });
    const [data, setData] = useState<Data>(initial);

    useEffect(() => {
        if (data.error) return;
        Api.getTotalCoins().then((res) => {
            if (typeof res === 'string') {
                setData((prev) => ({ ...prev, loading: false, error: true }));
            }
            setPagination({ totalPages: Math.floor(res.length / 100), currentPage: 1 });
            return null;
        });
    }, [data.error]);
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

    const handleResults = (filtered: any[]) => {
        setData((prev) => ({ ...prev, filteredResults: filtered }));
    };
    return (
        <>
            <GlobalStyles />
            <Header />
            <Container>
                {data.error ? (
                    <ErrorTab onClickHandler={setData} />
                ) : (
                    <>
                        <Search results={data.results} setResults={handleResults} />
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
