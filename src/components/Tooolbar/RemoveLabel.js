export const RemoveLabel = ({ labels, onChange }) =>
    <select className="form-control label-select" onChange={onChange} value="Remove label">
        <option disabled>Remove label</option>
        {labels.map(label => <option key={label} value={label}>{label}</option>)}
    </select>