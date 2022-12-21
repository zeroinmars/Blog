import {Board, Boards} from '../components/Board';


const Typescript = () => {
  return (
    <div>
      <div style={{height:"500px", width:"100%", background:"url(https://res.cloudinary.com/practicaldev/image/fetch/s---rROvro4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/y8duykf5peuazf5rghqr.png) fixed"}}>
      </div>
      <Boards>
        <Board> 
          <div style={{position:"relative", top:"50%"}}> 
            이터레이블
          </div>
        </Board>
        <Board></Board>
        <Board></Board>
        <Board></Board>
        <Board></Board>
        <Board></Board>
        <Board></Board>
        <Board></Board>
      </Boards>
    </div>
  )
}

export default Typescript