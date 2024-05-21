import React from "react";
import UserItem from "./UserItem";
import Card from '../../shared/components/UIElements/Card';


const UserList = props => {

        if(props.userItems.length===0)
        {
                  return (
                        <div class="center"> 
                        <Card>
                            <h1> No user found.</h1>
                        </Card>    
                        </div> 
                  );
                    
        }
            
    return ( 
                    <ul className="user-list">
                        {
                            props.userItems.map(userItem => 
                            <UserItem 
                            key={userItem.id} 
                            id={userItem.id} 
                            image={userItem.image}
                            name={userItem.name}  
                            numberOfPlaces={userItem.numberOfPlaces}
                            /> 
                            )
                        }
                    </ul>
    );
            
}

       


export default UserList;