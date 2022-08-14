interface cryptoType {
    id: string,
    name: string,
    image: string,
    current_price: number,
    ath:number,
    atl:number,
}


interface fullCryptoType {
    id: string,
    name: string,
    image: string,
    current_price: number,
    ath:number,
    atl:number,
    marketPriceData: Array<number>
}


export type {cryptoType, fullCryptoType}