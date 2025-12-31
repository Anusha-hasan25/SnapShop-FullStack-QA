import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Ye import karein
import './Account.css';
import './info/InfoPages.css';

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // 2. Navigate hook initialize karein

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Abhi ke liye hum sirf simulate kar rahe hain
    console.log(isLogin ? "Signing In..." : "Creating Account...");

    // 3. Click karne par user ko Home page par bhej dein
    // Real app mein yahan pehle API call hoti hai
    alert(isLogin ? "Login Successful!" : "Account Created Successfully!");
    navigate('/'); 
  };

  return (
    <div className="info-page-wrapper">
      <div className="info-container">
        <header className="info-header">
          <h1>{isLogin ? 'My Account' : 'Register'}</h1>
          <p className="last-updated">
            {isLogin ? 'WELCOME BACK TO SNAPSHOP LUXE' : 'JOIN OUR EXCLUSIVE WORLD'}
          </p>
        </header>

        <div className="auth-form-container">
          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="auth-input-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
            )}
            
            <div className="auth-input-group">
              <label>Email Address</label>
              <input type="email" placeholder="email@example.com" required />
            </div>

            <div className="auth-input-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>

            {isLogin && (
              <div className="forgot-pass-wrapper">
                <button type="button">Forgot Password?</button>
              </div>
            )}

            {/* Form submit hone par ab handleSubmit chalega */}
            <button type="submit" className="auth-action-btn">
              {isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}
            </button>
          </form>

          <div className="auth-toggle-footer">
            <p>
              {isLogin ? "DON'T HAVE AN ACCOUNT?" : "ALREADY A MEMBER?"}
              <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'REGISTER NOW' : 'LOGIN HERE'}
              </button>
            </p>
          </div>
        </div>

        <footer className="info-footer">
          <p className="serif italic text-2xl tracking-[10px] uppercase">SNAPSHOP 💎</p>
        </footer>
      </div>
    </div>
  );
};

export default Account;