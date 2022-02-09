import MessageStar from './MessageStar'
import MessageCheckbox from './MessageCheckbox'

const MessageInteractors = ({ starred, selected, id, changeHandler }) =>
    <div className="col-xs-1">
        <div className="row">
            <MessageCheckbox selected={selected} id={id} changeHandler={changeHandler} />
            <MessageStar starred={starred} id={id} changeHandler={changeHandler} />
        </div>
    </div>

export default MessageInteractors