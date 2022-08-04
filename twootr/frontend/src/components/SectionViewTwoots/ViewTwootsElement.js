import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");

  display: flex;
  flex-direction: column;
  width: 800px;
  border: 10px double #000;
  outline: 8px solid #888888;
  margin-left: 20px;
  margin-top: 20px;
  font-family: "Kanit", sans-serif;
  color: #888888;
  padding: 15px;
`;

export const ContainerTwoot = styled.div`
  padding: 15px;
`;

export const DivTop1 = styled.div`
  display: flex;
  text-align: left;
  margin-left: 10px;
  margin-right: 10px;
  gap: 10px;
`;

export const DivTop2 = styled.div`
  margin-left: 45%;
`;

export const DivMid = styled.div`
  display: flex;
  justify-content: left;
  margin-left: 15px;
  font-size: 18px;
  border-bottom: 2px solid #333;
  margin-bottom: 15px;
`;

export const DivDown = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const DivDownIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
