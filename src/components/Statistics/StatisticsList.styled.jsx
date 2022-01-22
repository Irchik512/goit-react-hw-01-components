import styled from 'styled-components';
import getRandomHexColor from "helpers/randomColor";

export const StatsList = styled.ul`
  list-style: none;
  margin: 0;
  padding:0;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;

`
export const StatsItem = styled.li`
width: 60px;
height: 60px;
padding: 15px 0px;
display: flex;
flex-direction: column;
align-content: center;
background-color: ${
getRandomHexColor
};
justify-content: center;
text-align: center;
color: ${getRandomHexColor};
`
export const Text = styled.span`
font-size: 20px;
`