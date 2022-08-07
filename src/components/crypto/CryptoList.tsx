import { Fragment } from "react";
import useCryptoData from "../../hooks/useCryptoData";
import classes from "./CryptoList.module.css";
import LoadingSpinner from "../UI/loadingSpinner";
import { cryptoType } from "../../types";
import CryptoCurrency from "./CryptoCurrency";

function CryptoList() {
  const {
    isLoading,
    cryptoData,
  }: { isLoading: boolean; cryptoData: cryptoType[] } = useCryptoData();

  // console.log(123);

  return (
      <div className={classes.background}>
        <div className={classes.overlay}></div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        cryptoData.map((crypto) => {
          return (
            <CryptoCurrency
              id={crypto.id}
              name={crypto.name}
              atl={crypto.atl}
              ath={crypto.ath}
              current_price={crypto.current_price}
              image={crypto.image}
            />
          );
        })
      )}
    </div>
  );
}

export default CryptoList;
