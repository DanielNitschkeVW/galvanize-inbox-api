export const UnreadMessageCount = ({ count }) =>
    <p className="pull-right">
        <span className="badge badge">{count}</span>
        unread message{count !== 1 && "s"}
    </p>