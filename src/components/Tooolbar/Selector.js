export const Selector = ({ icon, onClick }) =>
    <button
        className="btn btn-default"
        onClick={onClick}
    >
        <i className={`fa ${icon}`}></i>
    </button>