import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useAuth} from "../contexts/Auth";
import {LogoutAPI} from "../services/api";


export default function Logout () {

    const history = useHistory()
    const {toggleAuth , user} = useAuth()

    useEffect(() => {
        LogoutAPI(user)
            .then(res => {
                toggleAuth('')
                history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return (
        <div>logout</div>
    )
}