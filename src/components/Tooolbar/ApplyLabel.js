export const ApplyLabel = ({ labels, onChange, disabled }) =>
    <select
        className="form-control label-select"
        onChange={onChange}
        disabled={disabled}
    >
        <option>Apply label</option>
        {labels.map(label => <option key={label} value={label}>{label}</option>)}
    </select>