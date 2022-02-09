const MessageLabels = ({ labels }) =>
    <>
        {labels.map(label => <span key={label} className="label label-warning">{label}</span>)}
    </>

export default MessageLabels