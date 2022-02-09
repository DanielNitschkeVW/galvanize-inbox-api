import MessageLabels from './MessageLabels';
import MessageSubject from './MessageSubject';

const MessageHeader = ({message}) =>
    <div className="col-xs-11">
        <MessageLabels labels={message.labels} />
        <MessageSubject subject={message.subject} />
    </div>

export default MessageHeader