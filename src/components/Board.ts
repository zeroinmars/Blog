import styled from 'styled-components';

export const Board = styled.div`
  cursor: pointer;
  text-align: center;
  height:350px;
  width: 250px;
  border-radius: 10%;
  /* background-color: aquamarine; */
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.4);
  position: relative;
  &:hover {
    animation-name: example;
    animation-duration: 0.2s;
    box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.4);
    @keyframes example {
      from {
        top:0px;
      }
      to {
        top: -10px;
      }
    }
    top: -10px;
  }

`
export const Boards = styled.div`
  margin-top: 300px;
  margin-left: 150px;
  display:grid;
  grid-template-columns: 0.25fr 0.25fr 0.25fr 0.25fr;
  row-gap: 80px;
`