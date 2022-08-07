// See https://www.coingecko.com/en/api/documentation
const CG_LIST = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
const CG_MK_CHART = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"

async function httpGetCryptolist() {
    const res = await fetch(CG_LIST)
    const data = await res.json()
    return data;
}

async function httpGetCryptoMarketData() {
    const res = await fetch(CG_MK_CHART)
    const data = await res.json()
    return data;
}

export {
    httpGetCryptolist,
    httpGetCryptoMarketData

}