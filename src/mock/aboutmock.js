let Mock = require('mockjs')
// /aa 拦截
let arr = ['1','2','3','4']
// Mock.mock('/api/aa', 'get', (options)=>{
//     console.log('mock--get',options); // {url:'/api/aa',type:'get',body:null}
//     return arr
// })

// 正则 '/api/aa'
Mock.mock(/\/api\/acd/, 'get', (options)=>{
    console.log('正则',options); // {url:'/api/aa',type:'get',body:null}
    return arr
})

Mock.mock('/api/asd','post', (options)=>{
    console.log('mock--post',options); // {url:'/api/ab', type:'POST', body:'{"name":"zz"}'}
    return {
        status:200,
        message:'success',
        data:arr
    }
})