import { useState } from "react"

export const MessagesBlock = () => {
  const [messages, setMessages] = useState([]);
  const [id, setId] = useState(0);

  const changeMessage = (target) => {
    newMessage[target.name] = target.value;
  }

  const createAnswer = (name) => {
    const mess = `${name}, мы получили ваше сообщение.`;
    const botName = 'Bot';
    return {name:botName, message: mess, id: setId(id+1)}
  }

  const newMessage ={};

  
  return (
    <div>
      <label>
        name
        <input type="text" name="name" onChange={(e) => changeMessage(e.target)} />
      </label>
      <label>
        message
        <input type="text" name="message" onChange={(e) => changeMessage(e.target)}/>
      </label>
      <button onClick={() => {
        newMessage.id = id;
        const name = newMessage.name;
        if (newMessage.name && newMessage.message) {
          const answer = function() {
            setMessages(list => [...list, createAnswer(name)])
          }
          setMessages(list => [...list, Object.assign(newMessage)])
            
          setTimeout(answer, 1500)
        }else return;
        document.querySelectorAll('input').forEach(input => input.value = '');
        setId(id => id + 1);
      }
      }></button>
      <div>
        <MessagesList messages = {messages}/>
      </div>
    </div>
  )
}

const MessagesList = (props) => {
  return props.messages.map((message, index) => {return (
      <div
        key = {index}
      >
        {/* <div >{message.id}</div> */}
        <div class = "message__name">{message.name}</div>
        <div class = "message__message">{message.message}</div>
      </div>
  )})
}