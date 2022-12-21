import styled from 'styled-components';
const MainGif = styled.div`
  /* background: url(./img/Animation.gif) fixed; */
  /* background-image: url(https://res.cloudinary.com/practicaldev/image/fetch/s---rROvro4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/y8duykf5peuazf5rghqr.png) fixed; */
  /* height:600px;
  width:100%; */
  /* position:absolute; */
  /* z-index: -1;
  border-radius: 0% 0% 20% 30%; */
`
const MainFont = styled.span`
    /* position: relative;
    top:150px;
    left: 200px;
    padding:250px 0;
    color:white;
    text-shadow: 2px 2px black;
    font-size: 80px;
    font-family: 'Hi Melody', cursive;
    animation : appear 2s ease-out forwards;
    opacity: 0%; */
    /* @keyframes appear {
      to {
        opacity: 100%;
      }
    } */
`


const Main = () => {
  return (
    <div>
        <MainGif>
           
          {/* <div>가상 속 실물경제가 <br/> &nbsp; 구현되는 그날까지 </div> */}
        </MainGif>
    </div>
  )
}

export default Main