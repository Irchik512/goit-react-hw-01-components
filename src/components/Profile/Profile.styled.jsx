import styled from 'styled-components';

export const ProfileCard = styled.div`
  font-family: sans-serif;
  width: 300px;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  color: slategray;
`;
export const UserDescription = styled.div`
  padding: 30px 40px;
`;
export const UserAvatar = styled.img`
  display: block;
  margin: 0 auto 30px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  overflow: hidden;
`;
export const AcsentText = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin: 0 ;
  color: black;
`;
export const UserStats = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding:0;
  width: 100%;
`;
export const UserStatsItems = styled.li`
  display: inline-flex;
  flex-direction: column;
  width: 100px;
  border: 1px solid lightgray;
  background-color: rgba(255, 255, 255, 0.6);
`;