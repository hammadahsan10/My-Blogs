import React, { useEffect, useState } from 'react';
import './Authentication.css';
import Toast from 'react-bootstrap/Toast';
import { handlePostRequest } from '../services/PostTemplate';
import { useDispatch } from 'react-redux';

const Authentication = () => {

	const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '', confirmPassword: '' })
	const [showToast, setShowToast] = useState(false);

	const dispatch = useDispatch()

	const SignUpHandle = async () =>
	{
		const obj = {
			name: signUpData?.name,
			email: signUpData?.email,
			password: signUpData?.password,
			confirmPassword: signUpData?.confirmPassword,
		}  
		const postRequest = handlePostRequest(obj, '/api/SignUp');
    
		// Execute the async function returned by handlePostRequest
		const response = await postRequest();
	
		console.log("response 2", response)
		if (response?.status === 200) {
		}
	}

	useEffect(() => {
		if (signUpData.confirmPassword) {
			if (signUpData.password !== signUpData.confirmPassword) {
				setShowToast(true);
			} else {
				setShowToast(false);
			}
		}
	}, [signUpData.password, signUpData.confirmPassword]);

	return (
		<div className='body'>
			<div className="main">
				<input type="checkbox" id="chk" aria-hidden="true" />
				<div className="signup">
					<form>
						<label aria-hidden="true">Sign up</label>
						<input type="text" value={signUpData.name} onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })} placeholder="Name" required="" />
						<input type="email" value={signUpData.email} onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })} placeholder="Email" required="" />
						<input type="password" value={signUpData.password} onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })} placeholder="Password" required="" />
						<input type="password" value={signUpData.confirmPassword} onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })} placeholder="Confirm Password" required="" />
						<div className='container'>
							<Toast
								show={showToast}
								onClose={() => setShowToast(false)}
								delay={3000}
								style={{ backgroundColor: '##e73131', color: 'white' }}
							>
								<Toast.Body>Passwords must match</Toast.Body>
							</Toast>
						</div>

						<button type='button' onClick={SignUpHandle} disabled={signUpData.name == "" || signUpData.email == "" || signUpData.password == "" || signUpData.confirmPassword == ""}>
							Sign up
						</button>
					</form>
				</div>

				<div className="login">
					<form>
						<label for="chk" aria-hidden="true">Login</label>
						<input type="email" name="email" placeholder="Email" required="" />
						<input type="password" name="pswd" placeholder="Password" required="" />
						<button>Login</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Authentication;
