import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 200px;
  margin-left: 10px;
  font-family: monospace;
`;

export const Title = styled.h5`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const Input = styled.input`
  border: 0;
  font-size: 16px;
  border-bottom: 2px solid black;
  font-family: monospace;
`;

export const DivDown = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  -webkit-border-radius: 20;
  -moz-border-radius: 20;
  border-radius: 28px;
  color: #ffffff;
  font-size: 15px;
  background: #9734d9;
  text-decoration: none;
  width: 80px;
  height: 35px;
  margin-top: 10px;

  &:hover {
    background: #b768f0;
    text-decoration: none;
  }
`;

export const Characters = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #888888;
`;
