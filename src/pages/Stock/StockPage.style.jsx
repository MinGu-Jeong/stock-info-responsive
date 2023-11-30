import styled from 'styled-components';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  background: #f2f5f7;
  height: auto;
`;
export const ContentMargin = styled.div`
  padding-top: 50px;
  margin-top: 50px;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 20px;
    margin-top: 20px;
  }
`;
export const StockDetailContainer = styled.div`
  width: 1050px;
  height: auto;
  margin-top: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;

  @media screen and (max-width: 768px) {
    width: 90vw;
    margin-top: 80px;
  }
`;
export const StockDetailLeftWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;
export const StockDetailRightWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;
export const StockDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
export const StockId = styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const StockName = styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
export const StockPrice = styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
export const StockPercentChange = styled.div`
  color: ${(props) => (props.isRising ? '#da4841' : '#377BEB')};
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
export const StockInfo = styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
export const StockInfoValue = styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
export const StockChartContainer = styled.div`
  display: flex;
  width: 1050px;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;

  @media screen and (min-width: 769px) {
    width: 1050px;
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
    margin-top: 80px;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const LoadingBackground = styled.div`
  background-color: #f2f5f7;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 200px;
`;
