import App from "../App";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Logout from "../pages/logout";
import Home from "../pages/home";
import UserDetails from "../components/UserDetails";

export const Routes = [
    {path: '/' ,name: 'Bookmark' , component: Home , exact: true , showInNav: false},
    {path: '/dashboard' ,name: 'dashboard' , component: App  , private: true, showInNav: true},
    {path: '/login' , name: 'login' , component: Login  , showInNav: false},
    {path: '/signup' , name: 'signup', component: Signup  , showInNav: false},
    {path: '/logout' , name: 'Logout', component: Logout  , showInNav: false},
    {path: '/user' , name: 'user', component: UserDetails  , showInNav: false},
]