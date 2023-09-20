import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

export default function SignedOutToast() {
	const [show, setShow] = useState(false);

	return (
		<Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
			<Toast.Header>
				<strong className="me-auto">Signed Out</strong>
				<small>Now</small>
			</Toast.Header>
			<Toast.Body>You have been signed out successfully</Toast.Body>
		</Toast>
	);
}