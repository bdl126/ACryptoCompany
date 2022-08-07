import { useEffect, useCallback, useState } from "react";
import { httpGetCryptolist } from "./requests";

interface cryptoType {
    id: string,
    name: string,
    image: string,
    current_price: number,
    ath:number,
    atl:number,

}

function useCryptoData () {
    const [isLoading, setIsLoading] = useState(false)
    const [cryptoData, setCryptoData] = useState([])

    const getCryptoData = useCallback( async () => {
        setIsLoading(true)
        const fetchCryptoData = await httpGetCryptolist();
        setIsLoading(false)
        const filteredCryptoData = fetchCryptoData.map((x:cryptoType)  => {
            return {
                id: x.id,
                ath: x.ath,
                atl: x.atl,
                current_price: x.current_price,
                name: x.name,
                image: x.image
            }
        })
        setCryptoData(filteredCryptoData)
    }, [])

    useEffect(() => {
        getCryptoData();
    },[getCryptoData])

    return {
        isLoading,
        cryptoData,
    }
}

export default useCryptoData
