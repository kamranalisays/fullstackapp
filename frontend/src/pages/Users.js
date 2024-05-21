import React from "react";
import UserList from "../components/UserComponent/UserList";

const Users = () =>{

    const USERS = [
         { id : "a1" , name : "Kamran" , image: "https://www.w3schools.com/images/lamp.jpg" , numberOfPlaces : 3  }
    ];

    return  (  
    <UserList  userItems={USERS} /> 
    );

}


export default Users;