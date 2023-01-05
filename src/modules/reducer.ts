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

const imgPath = "./img/navList/";

const initialState: any = {
    navList : [{
        title:"languages",
        icon:"./img/navList/languages/languages-icon.png",
        detail:[{
            name:"python",
            icon: imgPath +"languages/detail/python-icon.png",
            boards:[],
            },
            {name:"javascript",
            icon: imgPath +"languages/detail/javascript-icon.png",
            boards:[],
            },
            {name:"typescript",
            icon: imgPath +"languages/detail/typescript-icon.png",
            boards:[
                {
                title:"제네릭 선언",
                path:'./generic',
                img: imgPath +"languages/detail/typescript/generic-img.png",
                },
            ],
            },
            {name:"react",
            icon: imgPath +"languages/detail/react-icon.png",
            boards:[
            ],
            },
            {name:"solidity",
            icon: imgPath +"languages/detail/solidity-icon.png",
            boards:[
                {
                    title:"크립토 좀비 만들기",
                    path:'./generic',
                    img: imgPath +"languages/detail/typescript/generic-img.png",
                },
            ],
            },
            ],
        },
        {title:"블록체인",
        icon:"./img/navList/blockchain/blockchain-icon.png",
        detail:[{
            name:"뉴스/소식",
            icon: imgPath+ "blockchain/detail/news-icon.png",
            boards:[],
            },{
            name:"합의알고리즘",
            icon:imgPath+ "blockchain/detail/consensus-icon.png",
            boards:[],
            },{
            name:"NFT",
            icon:imgPath+ "blockchain/detail/nft-icon.png",
            boards:[],
            },{
            name:"DAO",
            icon:imgPath+ "blockchain/detail/dao-icon.png",
            boards:[],
            },{
            name:"DEFI",
            icon:imgPath+ "blockchain/detail/defi-icon.png",
            boards:[],
            },{
            name:"거래소",
            icon:imgPath+ "blockchain/detail/exchange-icon.png",
            boards:[],
            },{
            name:"회사",
            icon:imgPath+ "blockchain/detail/company-icon.png",
            boards:[],
            },
        ],
        },
        {
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

