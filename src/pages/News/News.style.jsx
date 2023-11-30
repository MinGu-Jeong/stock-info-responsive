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
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding-top: 30px;
    margin-top: 30px;
  }
`;

export const NewsContainer = styled.div`
  width: 1000px;
  height: auto;
  background-color: #fff;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-left: 50px;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 90vw;
    padding-left: 30px;
    h1 {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 480px) {
    width: 90vw;
    padding-left: 30px;
    h1 {
      font-size: 20px;
    }
  }
`;

export const NewsWrapper = styled.div`
  border-bottom: 1px solid #000;
  width: 90%;
  height: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 90%;
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    h2 {
      font-size: 15px;
    }
    p {
      font-size: 10px;
    }
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: -50px;
  gap: 50px;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: -30px;
    gap: 30px;
  }
`;
export const NextPage = styled.div`
  width: 0;
  height: 0;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-left: 25px solid #303438;
  border-right: 25px solid transparent;
  border-top-left-radius: 3px;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 768px) {
    border-bottom: 10px solid transparent;
    border-top: 10px solid transparent;
    border-left: 15px solid #303438;
    border-right: 15px solid transparent;
  }
`;
export const PrevPage = styled.div`
  width: 0;
  height: 0;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-right: 25px solid #303438;
  border-left: 25px solid transparent;
  border-top-right-radius: 3px;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 768px) {
    border-bottom: 10px solid transparent;
    border-top: 10px solid transparent;
    border-right: 15px solid #303438;
    border-left: 15px solid transparent;
  }
`;
export const PrevPageDisabled = styled.div`
  width: 0;
  height: 0;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-right: 25px solid #929294;
  border-left: 25px solid transparent;
  border-top-right-radius: 3px;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 768px) {
    border-bottom: 10px solid transparent;
    border-top: 10px solid transparent;
    border-right: 15px solid #929294;
    border-left: 15px solid transparent;
  }
`;
export const PageNumber = styled.div`
  width: 15px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
