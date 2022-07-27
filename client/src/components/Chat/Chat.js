import React, {useState, useEffect} from "react"; 
import io from "socket.io-client"; 
import queryString from 'query-string';
import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Message/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";


let socket; 
const ENDPOINT = 'localhost:3002/';


const Chat = ({location}) =>{
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (e) => {
    e.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  
    return (
        <div className="outerContainer">
          <div className="container">
          <InfoBar room={room}/>
          <Messages messages={messages}  name={name}/>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          </div>
          <TextContainer/>
        </div>
      );

}

export default Chat;