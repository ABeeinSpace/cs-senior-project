import Toast from 'react-bootstrap/Toast';

export default function SignedOutToast() {
	return (
		<Toast>
			<Toast.Header>
				<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
				<strong className="me-auto">Signed Out</strong>
				<small>Now</small>
			</Toast.Header>
			<Toast.Body>You have been signed out successfully</Toast.Body>
		</Toast>
	);
}