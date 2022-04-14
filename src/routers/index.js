import App from "../App";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Logout from "../pages/logout";
import Home from "../pages/home";
import UserDetails from "../pages/UserDetails";

export const Routes = [
    {path: '/' ,name: 'Bookmark' , component: Home , exact: true , showInNav: false},
    {path: '/dashboard' ,name: 'dashboard' , component: App,exact: false ,  private: true, showInNav: true},
    {path: '/login' , name: 'login' , component: Login,exact: false, showInNav: false},
    {path: '/signup' , name: 'signup', component: Signup, exact: false, showInNav: false},
    {path: '/logout' , name: 'Logout', component: Logout, exact: false, showInNav: false},
    {path: '/user' , name: 'user', component: UserDetails, exact: false, showInNav: false},
]