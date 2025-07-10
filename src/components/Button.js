export default function Button({ label, onClick, type = 'button', className = '' }) {
    return (
        <button 
            type={type} 
            onClick={onClick} 
            className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ${className}`}
        >
            {label}
        </button>
    );
}
