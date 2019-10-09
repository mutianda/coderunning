import Home from '../pages/home/home';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import MyInfo from '../pages/myInfo/index';
import Like from '../pages/like/like'


export default [
    { path: "/home", name: "Home", component: Home },
    { path: "/myinfo", name: "MyInfo", component: MyInfo,auth: true },
    { path: "/register", name: "Register", component: Register },
    { path: "/like", name: "Like", component: Like, auth: true },
    { path: "/login", name: "Login", component: Login },

]
