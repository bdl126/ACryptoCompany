import { Fragment } from "react";
import useCryptoData from "../../hooks/useCryptoData";
import classes from "./CryptoList.module.css";
import LoadingSpinner from "../UI/loadingSpinner";
import { cryptoType, fullCryptoType } from "../../types";
import CryptoCurrency from "./CryptoCurrency";
import Card from "../cards/Card";

function CryptoList() {
  const {
    isLoading,
    cryptoData,
  }: { isLoading: boolean; cryptoData: fullCryptoType[] } = useCryptoData();

  return (
    <div className={classes.background}>
        <Card className={classes.sidebar}>
        <div className={classes.topsidebar}>
            top
          </div>
          <div className={classes.bottomsidebar}>
            bottom
          </div>
          </Card>
        <div className={classes.grid}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            cryptoData.map((crypto: fullCryptoType) => {
              return (
                <CryptoCurrency
                  id={crypto.id}
                  name={crypto.name}
                  atl={crypto.atl}
                  ath={crypto.ath}
                  current_price={crypto.current_price}
                  image={crypto.image}
                  marketPriceData={crypto.marketPriceData}
                />
              );
            })
          )}
        </div>
      </div>
  );
}

export default CryptoList;
