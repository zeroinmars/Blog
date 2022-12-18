import React from 'react'
import './Nav.css';

const Nav = () => {
  

  return (
    <div className='nav'>
        <div className="profile">
          <img className="profile-image" src="./img/profile.png" width="150px" height="160px" alt="img" />
          <div style={{height:"180px"}}></div>
          <div style={{textAlign:"center", cursor:"pointer"}}> <img src="./img/app-development.png" width="25px" height="25px" alt="" /> <span style={{fontSize:"20px"}}>ZeroInMars</span></div>
        </div>
        <div className='container'>
          <NavList img="./img/web-programming.png" content="웹개발" />
          <NavList img="./img/nft.png" content="블록체인" />
          <NavList img="./img/icons8-unreal-engine-64.png" content="언리얼엔진" />
        </div>
    </div>
  )
}

type NavProps = {
  img:string;
  content:string;
}

interface DetailedHTMLProps {
  name: string;
}


const NavList = ({img, content}:NavProps) => {
  const handleListDetail = (e:any) => {
    console.log(e.target)
  }
  return(
    <div style={{margin:"5px 0px"}}>
      <div className="nav-list" data-name={content} onClick={handleListDetail}>
        <img className='img' src={img} width="25px" height="25px" alt="" />
        <span>{content}</span>
        <img style={{marginLeft:"20px", marginTop:"5px"}} src="./img/arrow-right.png" width="15px" height="15px" alt="" />
        {/* <img style={{marginLeft:"20px"}} src="./img/arrow-right.png" width="25px" height="25px" alt="" /> */}
      </div>
      <div className='nav-list-hover-bottom'></div>
    </div>
  );
}

export default Nav