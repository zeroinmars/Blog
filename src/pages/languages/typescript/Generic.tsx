import React from 'react'
import Header from '../../../components/Header';
import Article from '../../../components/Article';
import { useSelector } from 'react-redux';
import { NavListType } from '../../../modules/reducer';

const Generic = () => {
    const Generic = useSelector((state:NavListType)=>state.navList[0].detail[2].boards[0]);
    const getAppleByrefigerator = () => {

    }
  return (
    <div>
        <Header/>
        <Article>
          타입스크립트를 사용하다보면 불가피하게 타입을 선언 해야 하는 경우가 있다.
          예시로 function refigerator 함수를 
          제네릭은 클래스, 인스턴스, 메서드 등의 타입을 파라미터로 사용 할 수 있게 해준다. <br/>
          또한 불필요한 타입 변환으로 인한 프로그램 성능 저하를 감소시킬 수 있다는 장점이 있다.
        </Article>
    </div>
  )
}

export default Generic;