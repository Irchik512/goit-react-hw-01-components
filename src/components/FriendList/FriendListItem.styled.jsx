import styled from 'styled-components';

export const Friends =styled.li`
  box-sizing: border-box;
  width: 300px;
  height: 100%;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0px  0px 4px 3px rgb(0 0 0 / 15%);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 20px;
  :not(first-child){
    margin-bottom: 15px;
  }
`;

export const Status = styled.span`
width: 25px;
height: 25px;
border-radius: 13px;
background-color: ${(props) => 
(props.status) ? "green" : "red"
}
`;

export const Avatar = styled.img`
overflow: hidden;
border-radius: 5px;
margin: 0 15px ;
`;