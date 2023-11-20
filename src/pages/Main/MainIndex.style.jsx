import { styled } from 'styled-components';

export const IndexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  gap: 50px;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    margin-top: 80px;
  }

  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    margin-top: 80px;
  }
`;

export const IndexItemWrapper = styled.div`
  width: 300px;
  height: 180px;
  background-color: #fff;
  border: 0px solid #000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 100px;
    margin: 0 auto;
  }

  @media screen and (max-width: 480px) {
    width: 130px;
    height: 60px;
    margin: 0 auto;
    gap: 5px;
  }
`;

export const IndexItemTitle = styled.span`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const IndexItemPointRise = styled.span`
  color: #da4841;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const IndexItemPointFall = styled.span`
  color: #377beb;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const IndexItemPercentRise = styled.span`
  color: #da4841;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;
export const IndexItemPercentFall = styled.span`
  color: #377beb;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;
