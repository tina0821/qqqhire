import cookie from 'react-cookies'

//登入成功後將帳號PK當cookie給網站驗證
export var onLogin = (useraccount) => {
    cookie.save('account',useraccount,{
        maxAge:60*60*24*5,
        path:'/'
    })
}

//邀求回傳cookie，如沒有可以轉跳登入頁面
export var checkLogin = () => {
    return(
        cookie.load('account')?cookie.load('account'):undefined 
    )
}

//登出後刪除cookie功能
export var logOut = () => {
    cookie.remove('account')
}