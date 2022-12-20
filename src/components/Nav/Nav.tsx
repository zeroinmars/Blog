import React from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

//Nav 리스트 
const list= [
  {img:"web-programming", title:"languages", detail:[{name:"python", img:"python"}, {name:"javascript", img:"javascript"}, {name:"typescript", img:"typescript"},{name:"react", img:"react"},{name:"solidity", img:"solidity"}]},
  {img:"nft", title:"블록체인", detail:[{name:"뉴스", img:""}, {name:"합의 알고리즘", img:""}, {name:"암호학", img:""},{name:"회사", img:""}]},
  {img:"icons8-unreal-engine-64", title:"언리얼엔진", detail:[{name:"뉴스/기사", img:""}, {name:"블루프린트", img:""}, {name:"디지털트윈", img:""},{name:"", img:""}]},
]

const Nav = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className='nav'>
          <div className="profile">
            <img className="profile-image" src="./img/profile.png" width="150px" height="160px" alt="img" />
            <div style={{height:"180px"}}></div>
            <div onClick={()=>{nav('/')}} style={{textAlign:"center", cursor:"pointer"}}> <img src="./img/app-development.png" width="25px" height="25px" alt="" /> <span style={{fontSize:"20px"}}>ZeroInMars</span></div>
          </div>
          <div className='container'>
            {list.map(
                (data,index)=> <NavList key={index} img={data.img} title={data.title} detail={data.detail}/>
            )}
          </div>
      </div>
      <div style={{width:"210px", height:"100vh"}}/>
    </div>

  )
}

type NavProps = {
  img:string;
  title:string;
  detail: Object;
}
type NavDetail = {
  detail: Object;
}

declare module 'react' {
  interface HTMLAttributes<T>{
    name?: string;
  }
}



const NavList = ({img, title, detail}:NavProps) => {
  const handleListDetail = (e:any) => {
    const navList:any = document.getElementById(title);
    if(navList.style.display == "block") {
      navList.style.display = "none";
    } else {
      navList.style.display = "block";
    }
  }
  
  return(
    <div style={{margin:"5px 0px"}}>
      <div className="nav-list" name={title} onClick={handleListDetail}>
        <img className='img' src={"./img/"+img+".png"} width="25px" height="25px" alt="" />
        <span>{title}</span>
        <img style={{marginLeft:"20px", marginTop:"5px"}} src="./img/arrow-right.png" width="15px" height="15px" alt="" />
        {/* <img style={{marginLeft:"20px"}} src="./img/arrow-right.png" width="25px" height="25px" alt="" /> */}
      </div>
      <div className='nav-list-hover-bottom'></div>
      <NavDetail detail={detail} title={title}/>
    </div>
  );
}

const NavDetail = ({detail, title}:any) => {
  const nav = useNavigate();
  return(
    <div id={title} style={{display:"none"}}>
      {detail.map((data:any, index:number)=>(
        <div key={index} className="navDetail" onClick={()=>{nav('/'+data.name)}}>
          <img src="./img/arrow-right2.png" alt="" width="7px" height="7px" style={{marginTop:"7px"}}/>
          <img src={"./img/"+data.name+".png"} width="20px" height="20px" alt="" style={{marginTop:"2px"}}/>
          <span style={{marginLeft:"10px"}}>{data.name}</span> 
        </div>
      ))}
    </div>
  );
}
export default Nav