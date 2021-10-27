export interface DataState {
    type: 'market_cap_desc' | 'volume_desc';
    loading: boolean;
    error: boolean;
    results: any[];
    filteredResults: any[];
}
