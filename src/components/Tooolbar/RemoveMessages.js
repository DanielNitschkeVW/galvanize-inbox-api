export const RemoveMessages = ({ onClick, disabled }) =>
    <button className="btn btn-default" onClick={onClick} disabled={disabled}>
        <i className="fa fa-trash-o"></i>
    </button>