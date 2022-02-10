const MessageCheckbox = ({ selected, id, changeHandler }) =>
<div className="col-xs-2">
    <input type="checkbox" checked={selected} onChange={() => changeHandler({ids: [id], property: "selected", value: !selected})}/>
</div>

export default MessageCheckbox