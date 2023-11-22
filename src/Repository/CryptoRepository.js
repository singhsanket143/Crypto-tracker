import axiosInstance from "../Config/axiosInstance";

export const fetchCryptoList = async (appCurrency, page, flag = false) => {
    try {
        if(!flag) return;
        const response = await axiosInstance.get(`coins/markets?vs_currency=${appCurrency}&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&locale=en`);
        return {
            success: true,
            data: response.data.map((coin) => {
                return {
                    id: coin.id,
                    symbol: coin.symbol,
                    name: coin.name,
                    image: coin.image,
                    change24h: coin.high_24h - coin.low_24h,
                    price: coin.current_price,
                    market_cap: coin.market_cap
                };
            })
        };
    } catch(error) {
        console.log(error);
        return {
            success: false,
            data: []
        };
    }   
};