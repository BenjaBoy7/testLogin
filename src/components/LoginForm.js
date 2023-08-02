import React, { useState } from 'react';
import '../styles/LoginForm.scss';
import logoImage from '../resources/placeholder-logo.png'; // Adjust the path based on the actual location of your image
import facebook from '../resources/facebook-logo.png'; // Adjust the path based on the actual location of your image
import insta from '../resources/insta-logo.png'; // Adjust the path based on the actual location of your image
import linkdn from '../resources/linkdn-logo.png'; // Adjust the path based on the actual location of your image

const LoginForm = ({ onLoginSuccess }) => {

  const [isResetFormVisible, setIsResetFormVisible] = useState(false);
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password)
      ? ''
      : 'Password must be at least 8 characters long with 1 uppercase, 1 lowercase, and 1 special character.';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded static username and password for testing purposes
    const hardcodedUsername = 'testuser@gmail.com';
    const hardcodedPassword = '2023@Assignemt!';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      // alert('Login successful!'); 
      onLoginSuccess(); 
    } else {
      setPasswordError('Invalid username or password');
    }
  };

  const showResetForm = () => {
    setIsResetFormVisible(true);
  };

  const showLoginForm = () => {
    setIsResetFormVisible(false);
  };
  const randomMottos = [
    "Empowering Innovations",
    "Building Tomorrow's World",
    "Inspiring Change",
    "Creating Solutions",
  ];

  const getRandomMotto = () => {
    const randomIndex = Math.floor(Math.random() * randomMottos.length);
    return randomMottos[randomIndex];
  };

  return (
    <div className="container">  
     <div class="left-side">
      <div className="logo-container">
              <img src={logoImage} alt="Company Logo" />
              <h3>{getRandomMotto()}</h3>
            </div>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="Instagram" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={linkdn} alt="LinkedIn" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
              </a>
            </div>
            <div className="contact">
              <p>Contact Us:</p>
              <p>Email: contact@example.com</p>
              <p>Phone: +1 123-456-7890</p>
            </div>
      </div>  
     <div class="right-side"> 
      <div className={`login-box ${isResetFormVisible ? "flip-animation" : ""}`}>
        <div className="form-container" id="login-form">
          <h2>Login</h2>
           <p>Plese use email: testuser@gmail.com Password: 2023@Assignemt!</p>
          {/* Your login form elements go here */}
          <form  onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange}  required />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
            {passwordError && <p className="error-message">{passwordError}</p>}
            <a href="#" onClick={showResetForm}>Forgot Password?</a>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="form-container" id="reset-form">
          <h2>Reset Password</h2>
          {/* Your reset password form elements go here */}
          <form>
            <input type="email" placeholder="Email" required />
            <button type="submit">Reset Password</button>
            <a href="#" onClick={showLoginForm}>Back to Login</a>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LoginForm;
