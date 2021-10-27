import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Search from './Search';

const mockSetResult = jest.fn();
describe('<Search/>', () => {
    test('Input is correctly rendered', async () => {
        render(<Search results={[]} setResults={mockSetResult} />);
        const input = screen.getByPlaceholderText(/Filter by name or symbol/i);
        expect(input).toBeInTheDocument();
    });
    test('Input text reflects user input', async () => {
        render(<Search results={[]} setResults={mockSetResult} />);
        const input = screen.getByPlaceholderText(/Filter by name or symbol/i) as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'Bitcoin' } });
        expect(input.value).toBe('Bitcoin');
    });
});
