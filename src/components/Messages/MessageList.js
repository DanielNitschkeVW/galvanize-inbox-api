import Message from './Message.js'

export const MessageList = ({ data, changeHandler }) => {

    return (
        <div className="messageList">
            {Array.isArray(data) && data.map(message => <Message
                key={message.id}
                message={message}
                changeHandler={changeHandler}
            />)}
        </div>
    )
}