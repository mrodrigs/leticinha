  
import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  background: #FFFEEB;
`;

export const Header = styled.div`
  width: 100%;
  height: 65px;
  background-color: #FFFEEB;
  display: flex;
  align-items: center;
  
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

export const Options = styled.div`
  width: 100%;
  height: 30px;
  background-color: #FFFEEB;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

export const TextType = styled.span`
  font-size: 15px;
  margin-bottom: 10px;
`;

export const Text = styled.span`
  font-size: 15px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const Container = styled.div`
  width: 100%;
  height: 913px;
  background-color: #FFFEEB;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #F8B3C5;
`;

export const InputSearch = styled.input`
  border: 1px solid #000;
  height: 40px;
  margin-left: 10px;
  width: 1000px;
  border-radius: 50px;
  background-color: #ffffff;
`;

export const Title = styled.span`
  font-size: 25px;
  font-weight: bold;
`;

export const ItemBox = styled.div`
  width: 100%;
  height: 913px;
  background-color: #FFFEEB;
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.div`
  display: flex;
  width: 800px;
  height: 170px;
  background-color: #FFFEEB;
  margin-top: 20px;
  border-color: black;
  border-radius: 10px;
  border: 1px solid #000;
`;

export const TitleItem = styled.span`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Photo = styled.img`
  width: 130px;
  height: 160px;
`;

export const InfoBox = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 100px 80px rgba(0, 0, 0, 0.07);
  font-size: 16px;
  margin-top: 48px;
  width: 460px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Button = styled.button`
  background-color: #FFFEEB;
  border-color: transparent;
`;

export const Input = styled.input`
  border: 1px solid #000;
  height: 30px;
  margin-left: 10px;
  width: 100%;
  border-radius: 50px;
  background-color: #ffffff;
`;

export const DataBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 400px;
`;