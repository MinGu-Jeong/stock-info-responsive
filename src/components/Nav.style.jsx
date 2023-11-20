import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100px;
  background-color: #fff;
  gap: 50px;

  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;
export const NavTitle = styled.div`
  width: 200px;
  height: 100px;
  background-color: #fff;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 480px) {
    width: 80px;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export const NavMenuCurrent = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
export const NavMenu = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #929294;
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
export const NavAlarmDateContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavAlarm = styled.div`
  margin-left: 100px;
  width: 100px;
  height: 80px;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavDate = styled.div`
  font-size: 15px;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
