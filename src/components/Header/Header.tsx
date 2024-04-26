import './Header.css';
import Button from '../Button/Button';

export default function Header() {
	return (
		<div className="header">
			<div className="button-wrapper">
				<Button>Log In</Button>
				<Button isActive={true}>Sign Up</Button>
			</div>
		</div>
	);
}
