import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('<Table/>', () => {
    test('Correct Elements Displayed While Loading', () => {
        render(<Table display={[]} loading />);
        const headers = screen.getAllByText(
            /(?:Symbol|Name|Current Price|Change|% Change|Market Cap|Total Volume|Circulating Supply|7 Day Chart)/,
        );
        const loader = screen.queryByTestId('loader');
        const tbody = screen.queryByTestId('tbody');
        expect(headers.length).toBe(9);
        expect(loader).toBeTruthy();
        expect(tbody).toBeFalsy();
    });
    test('Table renders correctly when there are no results', () => {
        render(<Table display={[]} loading={false} />);
        const headers = screen.getAllByText(
            /(?:Symbol|Name|Current Price|Change|% Change|Market Cap|Total Volume|Circulating Supply|7 Day Chart)/,
        );
        const loader = screen.queryByTestId('loader');
        const tbody = screen.queryByTestId('tbody');
        const rows = screen.queryAllByTestId('tbody-row');
        expect(headers.length).toBe(9);
        expect(loader).toBeFalsy();
        expect(tbody).toBeTruthy();
        expect(rows.length).toBe(0);
    });
    test('Table renders correctly when there are multiple results', () => {
        render(<Table display={['item-one', 'item-two', 'item-three']} loading={false} />);
        const headers = screen.getAllByText(
            /(?:Symbol|Name|Current Price|Change|% Change|Market Cap|Total Volume|Circulating Supply|7 Day Chart)/,
        );
        const loader = screen.queryByTestId('loader');
        const tbody = screen.queryByTestId('tbody');
        const rows = screen.queryAllByTestId('tbody-row');
        expect(headers.length).toBe(9);
        expect(loader).toBeFalsy();
        expect(tbody).toBeTruthy();
        expect(rows.length).toBe(3);
    });
});
