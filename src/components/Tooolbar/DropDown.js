export const DropDown = ({ title, labels, onChange, disabled }) =>
    <select
        className="form-control label-select"
        onChange={onChange}
        value={title}
        disabled={disabled}
    >
        <option disabled>{title}</option>
        {labels.map(label => <option key={label} value={label}>{label}</option>)}
    </select>