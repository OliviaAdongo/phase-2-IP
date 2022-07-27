import React, {useState, useEffect} from "react"; 

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

        <button className="signIn" type="submit">Sign In</button>
        </div>
    </div>

    </div>
)

}

export  default Join;