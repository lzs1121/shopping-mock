// 课程列表
const course = {
  data:{
    'Javascript':[
      {
        id:1,
        name:'ES6',
        img:'LearnES6_Final.png',
        price:'100',
        solded:'561',
      },
      {
        id:2,

        name:'Typescript',
        img:'Typescript_Plumbing_image.png',
        price:'100',
        solded:'156',
      },
      {
        id:3,

        name:'Javascript',
        img:'JSBasic-Algorithms_Final.png',
        price:'100',
        solded:'526',
      },

    ],

    'React':[
      {
        id:4,

        name:'React',
        img:'ReactBeginners.png',
        price:'100',
        solded:'536',
      },
      {
        id:5,

        name:'ReactNative',
        img:'ReactNative.png',
        price:'100',
        solded:'456',
      },
      {
        id:6,

        name:'React SSR',
        img:'ReactNextServer_Final.png',
        price:'100',
        solded:'556',
      },
      {
        id:7,

        name:'Redux Sage Middleware',
        img:'ReduxSaga.png',
        price:'100',
        solded:'2256',
      },
      {
        id:8,

        name:'react',
        img:'PWAReact_Final.png',
        price:'100',
        solded:'1156',
      },
      {
        id:9,

        name:'React Hooks',
        img:'SimplifyHooks_Final.png',
        price:'100',
        solded:'5361',
      },
      {
        id:10,

        name:'React Mobx',
        img:'React_Mobx_TS.png',
        price:'100',
        solded:'956',
      },
    ],
    'Vuejs':[
      {
        id:11,

        name:'Vue',
        img:'VueJS_Final.png',
        price:'180',
        solded:'586',
      },
      
      {
        id:12,

        name:'Vuejs with pwa',
        img:'VuePwa.png',
        price:'100',
        solded:'596',
      },
      {
        id:13,

        name:'TS for Vuejs',
        img:'TSVue_Final.png',
        price:'100',
        solded:'526',
      },
      
    ],
    'Git':[
      {
        id:14,

        name:'Github',
        img:'github.png',
        price:'99',
        solded:'10',
      },
      {
        id:15,

        name:'Git',
        img:'LearnGit.png',
        price:'49',
        solded:'180',
      },
      
    ],
    'Test':[
      {
        id:16,

        name:'Puppetee',
        img:'TestGooglePuppeteer_Final.png',
        price:'10',
        solded:'56',
      },
      {
        id:17,

        name:'jest tests React',
        img:'TestReactJest.png',
        price:'30',
        solded:'10',
      },
    ],
    'Python':[
      {
        id:18,

        name:'Python',
        img:'IntroPython.png',
        price:'100',
        solded:'56',
      },
    ],
    'Node.js':[

      {
        id:19,

        name:'Docker for nodejs',
        img:'NodeDocker_1000.png',
        price:'100',
        solded:'56',
      },
      {
        id:20,

        name:'AWS allocates nodejs',
        img:'NodeAWSServerless_Final.png',
        price:'100',
        solded:'56',
      },

    ],
    'GraphQL':[
      {
        id:21,

        name:'GraphQL',
        img:'GraphQL_Final.png',
        price:'100',
        solded:'56',
      },
    ]
  },
  tags:['Javascript','React','Vuejs','Git','Test','Python','Node.js','GraphQL']
}
// 课程分类
course.tags.forEach(tag=>{
  course.data[tag].forEach(v=>{
    v.tag = tag
  })
})

export default {
  // "method url": Object 或 Array
  // "get /api/goods": {
  //   result: data
  // },
  // "method url": (req, res) => {}
  "get /api/goods": function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 0,
        data: course
      });
    }, 2500);
  }
};
