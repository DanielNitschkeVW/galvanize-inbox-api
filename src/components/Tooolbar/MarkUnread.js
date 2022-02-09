export const MarkUnread = ({ onClick, disabled }) =>
    <button
        className="btn btn-default"
        onClick={onClick}
        disabled={disabled}
    >
        Mark As Unread
    </button>