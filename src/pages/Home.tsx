import React from 'react';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import './Home.css';

export default function Home() {
	return (
		<>
			<Header />
			<div className="Home-wrapper">
				<div className="Text-Content-wrapper">
					<h1>The chemical negatively charged</h1>
					<p>
						Numerous calculations predict, and experiments confirm, that the
						force field reflects the beam, while the mass defect is not formed.
						The chemical compound is negatively charged. Twhile the mass defect
						is{' '}
					</p>
					<div className="btnHomeScreen">
						<Button>Get Started</Button>
					</div>
				</div>
			</div>
		</>
	);
}
