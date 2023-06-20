export const getTrendingCryptos = async () => {
    const url = `${import.meta.env.VITE_CRYPTO_BASE_URL}/search/trending`
    const response = await fetch(url)
    const data = await response.json()
    return data.coins
}

export const getMarkets = async () => {
    const url = `${import.meta.env.VITE_CRYPTO_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    const response = await fetch(url)
    const data = await response.json()
    return data
}