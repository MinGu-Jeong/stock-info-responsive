import styled from 'styled-components';

export const FooterContainer = styled.div`
  text-align: center;
  gap: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    gap: 20px;
    margin-top: 10px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const FooterItem = styled.p`
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #000000;
  margin-top: 20px;
  margin-bottom: 0px;
  padding-bottom: 20px;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin-top: 10px;
    margin-bottom: 0px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    padding-bottom: 0px;
  }
`;
