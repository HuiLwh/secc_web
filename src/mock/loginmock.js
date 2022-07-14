let Mock = require('mockjs');

Mock.mock('/api/login', 'post', (config) => {
    // string
    console.log(config.body); //string
    let body = JSON.parse(config.body)
    console.log(body.username);
    let username = body.username
    let password = body.password
    if(username === 'admin' && password === '123456'){
        return {
            status: 200,
            message: "success",
            data: { username, password, token: "111" }
        }   
    }else{
        return{
            status: 501,
            message: "fail",
        }
    }
})