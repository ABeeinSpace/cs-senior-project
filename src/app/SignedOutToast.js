'use client'

import { React, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

export default function SignedOutToast() {
	const [show, setShow] = useState(false);

	return (
		<ToastContainer position="bottom-start" className="p-3" style={{ zIndex: 1 }}>
			<Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
				<Toast.Header>
					<strong className="me-auto">Signed Out</strong>
					<small>Now</small>
				</Toast.Header>
				<Toast.Body>You have been signed out successfully</Toast.Body>
			</Toast>
		</ToastContainer>
	);
}