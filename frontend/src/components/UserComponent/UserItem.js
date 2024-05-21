import React from 'react';
import './UserItem.css';
import Avatar from '../../shared/components/UIElements/Avatar' ;
import { Link } from 'react-router-dom';


const UserItem =  props  => {
 
    return (
    <li className="list-item">
        <div className="user-item-content" >
            <Link to={`/${props.id}/places`}>
            <div className="user-item-image">
                <Avatar image={props.image} alt={props.name}/>
            </div>
            <div className="user-item-info">
                <h2>{props.name}</h2>
                <h3>{ props.numberOfPlaces} {props.numberOfPlaces === 1 ? 'Place' : 'Places' }</h3>
            </div>
            </Link>
        </div>
    </li>
        
    );
}

export default UserItem;