import * as S from './MainIndex.style';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MainIndex() {
  const [exchangeRateUSD, setExchangeRateUSD] = useState(0);
  const [changeRateUSD, setChangeRateUSD] = useState(0);
  const [exchangeRateJPY, setExchangeRateJPY] = useState(0);
  const [changeRateJPY, setChangeRateJPY] = useState(0);
  const [kospi, setKospi] = useState(0);
  const [changeRateKospi, setChangeRateKospi] = useState(0);
  const [kosdaq, setKosdaq] = useState(0);
  const [changeRateKosdaq, setChangeRateKosdaq] = useState(0);

  useEffect(() => {
    axios
      .get(
        'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
      )
      .then((res) => {
        let changeRate = parseFloat(
          (res.data[0].signedChangeRate * 100).toFixed(2)
        );
        setExchangeRateUSD(res.data[0].basePrice);
        setChangeRateUSD(changeRate > 0 ? `+${changeRate}` : changeRate);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWJPY'
      )
      .then((res) => {
        let changeRate = parseFloat(
          (res.data[0].signedChangeRate * 100).toFixed(2)
        );
        setExchangeRateJPY(res.data[0].basePrice);
        setChangeRateJPY(changeRate > 0 ? `+${changeRate}` : changeRate);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://apis.data.go.kr/1160100/service/GetMarketIndexInfoService/getStockMarketIndex?serviceKey=${
          import.meta.env.VITE_REACT_APP_STOCK_PRICE_API_KEY
        }&resultType=json&idxNm=%EC%BD%94%EC%8A%A4%ED%94%BC`
      )
      .then((res) => {
        let changeRate = parseFloat(res.data.response.body.items.item[0].fltRt);
        changeRate = changeRate.toFixed(2);
        setKospi(res.data.response.body.items.item[0].hipr);
        setChangeRateKospi(changeRate > 0 ? `+${changeRate}` : changeRate);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://apis.data.go.kr/1160100/service/GetMarketIndexInfoService/getStockMarketIndex?serviceKey=${
          import.meta.env.VITE_REACT_APP_STOCK_PRICE_API_KEY
        }&resultType=json&idxNm=%EC%BD%94%EC%8A%A4%EB%8B%A5`
      )
      .then((res) => {
        let changeRate = parseFloat(res.data.response.body.items.item[0].fltRt);
        changeRate = changeRate.toFixed(2);
        setKosdaq(res.data.response.body.items.item[0].hipr);
        setChangeRateKosdaq(changeRate > 0 ? `+${changeRate}` : changeRate);
      });
  }, []);
  return (
    <div>
      <S.IndexContainer>
        <S.IndexItemWrapper>
          <S.IndexItemTitle>코스피</S.IndexItemTitle>
          {changeRateKospi > 0 ? (
            <S.IndexItemPointRise>{kospi}</S.IndexItemPointRise>
          ) : (
            <S.IndexItemPointFall>{kospi}</S.IndexItemPointFall>
          )}
          {changeRateKospi > 0 ? (
            <S.IndexItemPercentRise>{changeRateKospi}%</S.IndexItemPercentRise>
          ) : (
            <S.IndexItemPercentFall>{changeRateKospi}%</S.IndexItemPercentFall>
          )}
        </S.IndexItemWrapper>
        <S.IndexItemWrapper>
          <S.IndexItemTitle>코스닥</S.IndexItemTitle>
          {changeRateKosdaq > 0 ? (
            <S.IndexItemPointRise>{kosdaq}</S.IndexItemPointRise>
          ) : (
            <S.IndexItemPointFall>{kosdaq}</S.IndexItemPointFall>
          )}
          {changeRateKosdaq > 0 ? (
            <S.IndexItemPercentRise>{changeRateKosdaq}%</S.IndexItemPercentRise>
          ) : (
            <S.IndexItemPercentFall>{changeRateKosdaq}%</S.IndexItemPercentFall>
          )}
        </S.IndexItemWrapper>
        <S.IndexItemWrapper>
          <S.IndexItemTitle>미국 USD</S.IndexItemTitle>
          {changeRateUSD > 0 ? (
            <S.IndexItemPointRise>{exchangeRateUSD}</S.IndexItemPointRise>
          ) : (
            <S.IndexItemPointFall>{exchangeRateUSD}</S.IndexItemPointFall>
          )}
          {changeRateUSD > 0 ? (
            <S.IndexItemPercentRise>{changeRateUSD}%</S.IndexItemPercentRise>
          ) : (
            <S.IndexItemPercentFall>{changeRateUSD}%</S.IndexItemPercentFall>
          )}
        </S.IndexItemWrapper>
        <S.IndexItemWrapper>
          <S.IndexItemTitle>일본 JPY</S.IndexItemTitle>
          {changeRateJPY > 0 ? (
            <S.IndexItemPointRise>{exchangeRateJPY}</S.IndexItemPointRise>
          ) : (
            <S.IndexItemPointFall>{exchangeRateJPY}</S.IndexItemPointFall>
          )}
          {changeRateJPY > 0 ? (
            <S.IndexItemPercentRise>{changeRateJPY}%</S.IndexItemPercentRise>
          ) : (
            <S.IndexItemPercentFall>{changeRateJPY}%</S.IndexItemPercentFall>
          )}
        </S.IndexItemWrapper>
      </S.IndexContainer>
    </div>
  );
}
