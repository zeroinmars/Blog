import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

declare module 'react-redux' {
    interface DefaultRootState extends NavListType{}
  }
type NavListType = {
    navList:[{
        title:string,
        icon:string,
        detail:[{
                name:string,
                icon:string,
                boards:any[]
            },{
                name:string,
                icon:string,
                boards:any[]
            },{
                name:string,
                icon:string,
                boards:any[]
            },{
                name:string,
                icon:string,
                boards:any[]
            },{
                name:string,
                icon:string,
                boards:any[]
            },
        ]},{
        title:string,
        icon:string,
        detail:[{
            name:string,
                icon:string,
                boards:any[],
            },{
            name:string,
                icon:string,
                boards:any[],
            },{
            name:string,
                icon:string,
                boards:any[],
            },{
            name:string,
                icon:string,
                boards:any[],
            },{
            name:string,
                icon:string,
                boards:any[],
            },{
            name:string,
                icon:string,
                boards:any[],
            },{
            name:string,
                icon:string,
                boards:any[],
            },
        ]},{
        title:string,
        icon:string,
        detail: [{
            name:string,
                icon:string,
                boards:any[],
            },{
           name:string,
                icon:string,
                boards:any[],
            },
        ]}
    ]
}

const initialState: NavListType = {
    navList : [{
        title:"languages",
        icon:"./img/navList/languages/languages-icon.png",
        detail:[{
            name:"python",
            icon:"./img/navList/languages/detail/python-icon.png",
            boards:[],
            },{
            name:"javascript",
            icon:"./img/navList/languages/detail/javascript-icon.png",
            boards:[],
            },{
            name:"typescript",
            icon:"./img/navList/languages/detail/typescript-icon.png",
            boards:[
                {
                title:"제네릭 선언",
                path:'/generic',
                img:"./img/navList/languages/detail/typescript/generic-img.png",
                content:"소개 (Introduction) 잘 정의되고 일관된 API뿐만 아닌 재사용 가능한 컴포넌트를 구축하는 것도 소프트웨어 엔지니어링에서의 주요한 부분입니다. 현재의 데이터와 미래의 데이터 모두를 다룰 수 있는 컴포넌트는 거대한 소프트웨어 시스템을 구성하는 데 있어 가장 유연한 능력을 제공할 것입니다.C#과 Java 같은 언어에서, 재사용 가능한 컴포넌트를 생성하는 도구상자의 주요 도구 중 하나는 제네릭입니다, 즉, 단일 타입이 아닌 다양한 타입에서 작동하는 컴포넌트를 작성할 수 있습니다. 사용자는 제네릭을 통해 여러 타입의 컴포넌트나 자신만의 타입을 사용할 수 있습니다. 제네릭의 Hello World (Hello World of Generics) 먼저 제네릭의 'hello world'인 identity 함수를 해봅시다. identity 함수는 인수로 무엇이 오던 그대로 반환하는 함수입니다. echo 명령과 비슷하게 생각할 수 있습니다.제네릭이 없다면, identity 함수에 특정 타입을 주어야 합니다"
                },
            ],
            },{
            name:"react",
            icon:"./img/navList/languages/detail/react-icon.png",
            boards:[],
            },{
            name:"solidity",
            icon:"./img/navList/languages/detail/solidity-icon.png",
            boards:[],
            },
            ],
        },{
        title:"블록체인",
        icon:"./img/navList/blockchain/blockchain-icon.png",
        detail:[{
            name:"뉴스/소식",
            icon:"blockchian-news-icon",
            boards:[],
            },{
            name:"합의알고리즘",
            icon:"blockchian-consensusAlgorithm-icon",
            boards:[],
            },{
            name:"NFT",
            icon:"blockchian-NFT-icon",
            boards:[],
            },{
            name:"DAO",
            icon:"blockchian-DAO-icon",
            boards:[],
            },{
            name:"DEFI",
            icon:"blockchian-DEFI-icon",
            boards:[],
            },{
            name:"거래소",
            icon:"blockchian-exchange-icon",
            boards:[],
            },{
            name:"회사",
            icon:"blockchian-company-icon",
            boards:[],
            },
            ],
        },{
        title:"언리얼엔진",
        icon:"./img/navList/unrealEngine/unrealEngine-icon.png",
        detail:[{
            name:"소식",
            icon:"unrealEngine-news-icon",
            boards:[],
                },{
            name:"회사",
            icon:"unrealEngine--icon",
            boards:[],
                },
            ]},
    ]
}



const navSlice = createSlice({
    name:"navList",
    initialState,
    reducers: {
        // getNavList(state, action) {
        //     state.navList = action.payload.name;
        // }
    }
})


const store = configureStore({
    reducer: navSlice.reducer
});

export const navActions = navSlice.actions;
export default store;

