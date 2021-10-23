import axios from './AxiosConfig';

type BasicCoinInfo = {
    id: '01coin';
    symbol: 'zoc';
    name: '01coin';
};

export default {
    async getTotalCoins(): Promise<BasicCoinInfo[] | string> {
        try {
            const res = await axios.get('https://api.coingecko.com/api/v3/coins/list');
            if (Array.isArray(res.data)) {
                return res.data;
            }
            throw new Error('Unexpected result');
        } catch (err: unknown) {
            if (typeof err === 'string') return err;
            if (err instanceof Error) return err.message;
            return 'Unexpected error';
        }
    },
    async getMarketInfo(page: number) {
        try {
            const res = await axios.get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`,
            );
            if (Array.isArray(res.data)) {
                return res.data;
            }
            throw new Error('Unexpected result');
        } catch (err: unknown) {
            if (typeof err === 'string') return err;
            if (err instanceof Error) return err.message;
            return 'Unexpected error';
        }
    },
};
