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
    <div className = "message-block">
      <h2 className = "message-block__header">Приём заявок</h2>
      <div className="message-block__subhead">Введите ваше сообщение</div>
      <label>
        <span className="message-block__input-label">Ваше имя</span>
        <input 
          type="text"
          name="name"
          className = "message-block__input"
          onChange={(e) => changeMessage(e.target)} />
      </label>
      <label>
        <span
        className="message-block__input-label" 
        style = {{verticalAlign: "top"}}>Сообщение</span>
        <textarea
        name="message"
        className = "message-block__input"
        onChange={(e) => changeMessage(e.target)}/>
      </label>
      <button onClick={() => {
        newMessage.id = id;

        const name = newMessage.name;

        if (newMessage.name && newMessage.message) {
          const answer = function() {
            setMessages(list => [...list, createAnswer(name)]);
          }
          setMessages(list => [...list, Object.assign(newMessage)]);
          setTimeout(answer, 1500);
        }else {
          alert('empty field');
          return};

        document.querySelectorAll('.message-block__input')
          .forEach(input => input.value = '');

        setId(id => id + 1);
      }
      }>Отправить</button>
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
        className= "message"
      >
        <h4 className = "message__name">{message.name}</h4>
        <p className = "message__message">{message.message}</p>
      </div>
  )})
}