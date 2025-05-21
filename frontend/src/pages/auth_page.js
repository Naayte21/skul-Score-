import React, { useState, useRef, useEffect } from 'react';
import '../styles/auth_page.css';

// Import background images (still needed by CSS so they get bundled)
import '../assets/bg1.png';
import '../assets/bg2.png';
import '../assets/bg3.png';
import '../assets/bg4.png';
import '../assets/bg5.png';

// Import illustrations for login/signup
import loginImg from '../assets/authentication-65.svg';
import signupImg from '../assets/undraw_mobile-login_4ntr.svg';

function Auth() {
  const [activeTab, setActiveTab] = useState('login');
  const loginRef = useRef();
  const signupRef = useRef();
  const sliderRef = useRef();

  useEffect(() => {
    if (activeTab === 'login') {
      sliderRef.current.style.transform = 'translateX(0%)';
    } else {
      sliderRef.current.style.transform = 'translateX(-50%)';
    }
  }, [activeTab]);

  return (
    <div className="auth-wrapper">
      {/* Background floating images */}
      <div className="auth-background">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* Card with login/signup form */}
      <div className="auth-card">
        <div className="tab-header">
          <button
            className={activeTab === 'login' ? 'active' : ''}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={activeTab === 'signup' ? 'active' : ''}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>

        <div className="tab-content">
          <div className="tab-slider" ref={sliderRef}>
            <div className="form-container" ref={loginRef}>
              <form className="auth-form">
                <img src={loginImg} alt="Login Illustration" className="auth-illustration" />
                <h2>Login</h2>
                <div className="input-icon-wrapper">
                  <i className="bx bx-envelope"></i>
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="input-icon-wrapper">
                  <i className="bx bx-lock-alt"></i>
                  <input type="password" placeholder="Password" required />
                </div>
                <button type="submit">Login</button>
                <div className="forgot-password">
                  <a href="/forgot-password">Forgot Password?</a>
                </div>
              </form>
            </div>

            <div className="form-container" ref={signupRef}>
              <form className="auth-form">
                <img src={signupImg} alt="Signup Illustration" className="auth-illustration" />
                <h2>Sign Up</h2>
                <div className="input-icon-wrapper">
                  <i className="bx bx-user"></i>
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="input-icon-wrapper">
                  <i className="bx bx-envelope"></i>
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="input-icon-wrapper">
                  <i className="bx bx-lock-alt"></i>
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="input-icon-wrapper">
                  <i className="bx bx-lock-alt"></i>
                  <input type="password" placeholder="Confirm Password" required />
                </div>
                <button type="submit">Create Account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
