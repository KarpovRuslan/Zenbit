import './Button.css';

export default function Button({ isActive, children, handleClick }) {
	return (
		<button
			className={`button ${isActive ? 'active' : ''}`}
			onClick={handleClick}
		>
			{children}
		</button>
	);
}
