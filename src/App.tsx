import React from 'react';
import GlobalStyles from './Global.styles';
import { Table } from './components';

const App = () => {
    return (
        <>
            <GlobalStyles />
            <div>
                <Table results={[]} />
            </div>
        </>
    );
};

export default App;
