import MessageHeader from "./MessageHeader"
import MessageInteractors from "./MessageInteractors"

const Message = ({ message, changeHandler }) =>
    <div className={`row message ${!message.read ? "un":""}read`}>
        <MessageInteractors
            starred={message.starred}
            selected={message.selected}
            id={message.id}
            changeHandler={changeHandler}
        />
        <MessageHeader message={message} />
    </div>

export default Message