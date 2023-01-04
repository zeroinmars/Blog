import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

declare module 'react-redux' {
    interface DefaultRootState extends NavListType{}
  }

export type NavListType = {
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

const imgPath = "./img/navList/languages/detail/";

const initialState: any = {
    navList : [{
        title:"languages",
        icon:"./img/navList/languages/languages-icon.png",
        detail:[{
            name:"python",
            icon: imgPath +"python-icon.png",
            boards:[],
            },
            {name:"javascript",
            icon: imgPath +"javascript-icon.png",
            boards:[],
            },
            {name:"typescript",
            icon: imgPath +"typescript-icon.png",
            boards:[
                {
                title:"제네릭 선언",
                path:'./generic',
                img: imgPath +"typescript/generic-img.png",
                },
            ],
            },
            {name:"react",
            icon: imgPath +"react-icon.png",
            boards:[
            ],
            },
            {name:"solidity",
            icon: imgPath +"solidity-icon.png",
            boards:[
                {
                    title:"크립토 좀비 만들기",
                    path:'./generic',
                    img: imgPath +"typescript/generic-img.png",
                },
            ],
            },
            ],
        },
        {title:"블록체인",
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
        },
    ]
}
        // {
        // title:"언리얼엔진",
        // icon:"./img/navList/unrealEngine/unrealEngine-icon.png",
        // detail:[{
        //     name:"소식",
        //     icon:"unrealEngine-news-icon",
        //     boards:[],
        //         },{
        //     name:"회사",
        //     icon:"unrealEngine--icon",
        //     boards:[],
        //         },
        // ]},


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

