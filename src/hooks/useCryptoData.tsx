import { useEffect, useCallback, useState } from "react";
import { httpGetCryptolist, httpGetCryptoMarketData } from "./requests";
import { cryptoType, fullCryptoType } from "../types";

function useCryptoData () {
    const [isLoading, setIsLoading] = useState(false)
    const [cryptoData, setCryptoData] = useState<fullCryptoType[]>([])

    const getCryptoData = useCallback( async () => {
        setIsLoading(true)
        const fetchCryptoData = await httpGetCryptolist();

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


        const FullyPopulateCryptoData : fullCryptoType[]= await Promise.all(filteredCryptoData.map(async (element:cryptoType) => {

            const data  = await httpGetCryptoMarketData(element.id, 7)
            const newPriceData = data.prices.map((el:Array<number>) => {
                el[0] = new Date(el[0]).getDay()
                return el
            });
            console.log(newPriceData);

            return {
                ...element,
                marketPriceData:newPriceData
            }
        }));

        setCryptoData(FullyPopulateCryptoData)


        setIsLoading(false)
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
