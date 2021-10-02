import React from 'react';
import { useHistory} from 'react-router-dom'
import {useUserContext} from "../../contexts/UserContext";

export default function LogoutUser(){
    const history=useHistory();
    const {user: {current: {userCredential}},logOutUser} = useUserContext();
    if (userCredential) {logOutUser({})}
    if (!userCredential) history.replace("/");
    return <React.Fragment>
        <p>logout</p>
    </React.Fragment>
}
