import styled from 'styled-components';

export const HistiryOFTransactions = styled.table`
font-family: sans-serif;
font-weight: 500;
font-size: 18px;
max-width: 300px;
table-layout: fixed;
border-collapse: collapse;
padding: 10px;
text-align: center;
border: solid 1px grey;
overflow: hidden;
  thead {
    background-color: blue;
    color: white;
    text-transform: uppercase;
  }
  thead th:nth-child(1) {
    width: 40%;
  }
  tr:nth-child(2n) {
    background-color: rgb(226, 226, 226);
  }
`
