import React from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const NavCSS = styled.div`
    border: 0.05px solid black;
    background: white;
    position: fixed;
    width:200px;
    height:100%;
    overflow: scroll;
    &::-webkit-scrollbar{
      display: none;
    }
    z-index: 1;
    box-shadow: 5px 5px rgba($color: #000000, $alpha: 0.1);
    padding: 5px;
    left: 00px;
`

const ProfileImg = styled.img`
  left: 20px;
  top: 20px;
  width: 150px;
  height: 150px;
  position: absolute;
  border: 2px dashed lightblue;
  border-radius: 40px;
  &:hover {
      box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.2);
  }
`


//Nav 리스트 
// const navList= [
//   {img:"web-programming", title:"languages", detail:[{name:"python", img:"python"}, {name:"javascript", img:"javascript"}, {name:"typescript", img:"typescript"},{name:"react", img:"react"},{name:"solidity", img:"solidity"}]},
//   {img:"nft", title:"블록체인", detail:[{name:"뉴스", img:""}, {name:"합의 알고리즘", img:""}, {name:"암호학", img:""},{name:"회사", img:""}]},
//   {img:"icons8-unreal-engine-64", title:"언리얼엔진", detail:[{name:"뉴스/기사", img:""}, {name:"블루프린트", img:""}, {name:"디지털트윈", img:""},{name:"", img:""}]},
// ]



const Nav = () => {
  const nav = useNavigate();
  const navList = useSelector(({navList})=>navList);
  return (
    <NavCSS>
      <ProfileImg className="profile-image" src="./img/navList/profile.png" alt="img" />
      <div style={{height:"180px"}}></div> {/* ProfileImg position이 absolute라 ProfileImg 높이값 대신 확보 용도*/}
      <div onClick={()=>{nav('/')}} style={{textAlign:"center", cursor:"pointer", marginBottom:"20px"}}> <img src="./img/navList/app-development.png" width="25px" height="25px" alt="" /> <span style={{fontSize:"20px"}}>ZeroInMars</span></div>
        {navList.map(
            (data,index)=> <NavList key={index} img={data.icon} title={data.title} detail={data.detail}/>
        )}
    </NavCSS>

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
    <div style={{margin:"5px 0px", overflow:"hidden"}}>
      <div className="nav-list" name={title} onClick={handleListDetail}>
        <img className='img' src={img} width="25px" height="25px" alt="" />
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
          <img src="./img/navList/arrow-right2.png" alt="" width="7px" height="7px" style={{marginTop:"7px"}}/>
          <img src={data.icon} width="20px" height="20px" alt="" style={{marginTop:"2px"}}/>
          <span style={{marginLeft:"10px"}}>{data.name} <span style={{color:"#cc1410"}}>{data.boards.length?"("+data.boards.length+")":""}</span> </span>
        </div>
      ))}
    </div>
  );
}
export default Nav