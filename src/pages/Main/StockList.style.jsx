import styled from 'styled-components';

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StockListContainer = styled.div`
  margin-top: 50px;
  padding-bottom: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  width: 1350px;
  height: auto;
  overflow: hidden;
  border: none;
  border-radius: 10px;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const StockSortContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 30px;
  margin-left: 50px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    margin-left: 30px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    justify-content: center;
    gap: 40px;
  }
`;

export const StockSortItemSelect = styled.div`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 30px;
  background-color: #2f3439;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 80px;
    height: 40px;
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    width: 60px;
    height: 30px;
    font-size: 10px;
    border-radius: 10px;
  }
`;

export const StockSortItemDeselct = styled.div`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 30px;
  background: #d9d9d9;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 80px;
    height: 40px;
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    width: 60px;
    height: 30px;
    font-size: 10px;
    border-radius: 10px;
  }
`;

export const StockItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 70px;
  border-bottom: 1px solid #000;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    height: 50px;
  }
`;
export const StockItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StockItem = styled.div`
  width: 300px;
  padding-left: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 768px) {
    width: 200px;
    padding-left: 30px;
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    width: 130px;
    padding-left: 10px;
    font-size: 10px;
  }
`;

export const StockItemPercentRise = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 10px;
  background-color: #da4841;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 20px;
    font-size: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 40px;
    height: 20px;
    font-size: 10px;
  }
`;

export const StockItemPercentFall = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 10px;
  background-color: #377beb;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 20px;
    font-size: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 40px;
    height: 20px;
    font-size: 10px;
  }
`;
export const StockItemShowMore = styled.button`
  margin-top: 30px;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #2f3439;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 80px;
    height: 30px;
    font-size: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 60px;
    height: 20px;
    font-size: 10px;
  }
`;
