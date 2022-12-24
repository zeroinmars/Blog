import Board, {Boards} from '../components/Board';
import { useSelector } from 'react-redux';
import { NavListType } from '../modules/reducer';

const Typescript = () => {
  const typescriptInfo = useSelector(({navList}:NavListType)=>navList[0]);
  return (
    <div>
      <div style={{height:"500px", width:"100%", background:"url(https://res.cloudinary.com/practicaldev/image/fetch/s---rROvro4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/y8duykf5peuazf5rghqr.png) fixed"}}>
      </div>
      <Boards>
        {typescriptInfo.detail[2].boards.map(
          (data,index)=><Board key={index} image={data.img} title={data.title} content={data.content}/>
        )}
      </Boards>
    </div>
  )
}

export default Typescript

