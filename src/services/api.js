import axios from "axios";

// const serverPath = 'https://bookmarker-server-skmkiani.fandogh.cloud/app1/'
const serverPath = 'http://localhost:8000/app1/'

export const LoginAPI = (data) =>
    axios.post(`${serverPath}login/`,data)

export const SignupAPI = (data) =>
    axios.post(`${serverPath}signup/`,data)

export const BookmarkListAPI = (user) =>
    axios
        .get(`${serverPath}bookmarks/`,{
            headers: {
                'Authorization': `Token ${user}`,
            }
        })

export const CategoryListAP = (user) =>
    axios
        .get(`${serverPath}categories/`,{
            headers: {
                'Authorization': `Token ${user}`,
            }
        })

export const NewBookmarkAPI = (user,data) =>
    axios
        .post(`${serverPath}bookmarks/`,data,{
            headers: {
                'Authorization': `Token ${user}`,
            }
        })

export const LogoutAPI = (user) =>
    axios
        .post(`${serverPath}logout/`,[],{
            headers: {
                'Authorization': `Token ${user}`,
            }
        })

export const UserAPI = (user) =>
    axios
        .get(`${serverPath}user/`,{
            headers: {
                'Authorization': `Token ${user}`,
            }
        })

export const NewCategoryAPI = (user,data) =>
    axios
        .post(`${serverPath}categories/`, {name: data},{
            headers: {
                'Authorization': `Token ${user}`,
            }
        })
