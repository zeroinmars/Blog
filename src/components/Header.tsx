import styled from 'styled-components';

const HeaderCSS = styled.div`
    position: fixed;
    height: 500px;
    width: 90%;
    background:url(https://res.cloudinary.com/practicaldev/image/fetch/s---rROvro4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/y8duykf5peuazf5rghqr.png) fixed;
`;


// type HeaderType = {
//   background: string;
// }

const Header = () => {
  return (
    <>
      <HeaderCSS></HeaderCSS>
      <div style={{height:"500px", width:"5%"}}/>
    </>
  )
}

export default Header