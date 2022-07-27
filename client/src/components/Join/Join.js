import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"; 

//remember to put in link to another page

function Join(){
const [name, setName] = useState('');
const [room, setRoom] = useState('');

return(
    <div className="outerContainer">
    <div className="innerContainer">
        <h2>Join Room</h2>
        <div>
        <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />

        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
         <button className="logIn">Click here</button>
        </Link>
        <button className="signIn" type="submit">Sign In</button>
        </div>
    </div>

    </div>
)

}

export  default Join;