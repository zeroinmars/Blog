import styled from 'styled-components';

const Boards = styled.div`
  margin-top: 300px;
  margin-left: 150px;
  display:grid;
  grid-template-columns: 0.25fr 0.25fr 0.25fr 0.25fr;
  row-gap: 80px;
`
const Board = styled.div`
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  height:350px;
  width: 250px;
  border-radius: 10%;
  /* background-color: aquamarine; */
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.4);
  position: relative;
  &:hover {
    animation: example 0.2s forwards;
    box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.4);
    @keyframes example {
      from {
        top:0px;
      }
      to {
        top: -10px;
      }
    }
  }

`

type BoardType = {
  image: string,
  title: string
}

const BoardCompo = ({image, title}: BoardType) =>{
  return(
    <Boards>
      <Board>
        <img src={image} width="100%" height="40%" alt="" />
        <span style={{fontSize:"30px", fontFamily: "Hi Melody cursive;"}}>{title}</span><br/>
        <span>내용</span>
      </Board>
    </Boards>
  );
}


export default BoardCompo;