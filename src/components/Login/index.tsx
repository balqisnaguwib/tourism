import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

// Others
import { login } from '@/stores/auth';
// Import CSS module
import styles from '@/styles/login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const { push } = useRouter();
  
  const taglines = [
    'Your intelligent travel companion',
    'Plan your next adventure',
    'Discover new destinations'
  ];

  useEffect(() => {
    // Delay form appearance for logo animation to complete
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Tagline rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulate login delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (username === 'admin' && password === 'password123') {
      dispatch(
        login({
          username: username,
        })
      );
      push('/dashboard');
    } else {
      setError('Invalid username or password');
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      {/* Animated background elements */}
      <div className={styles.animatedBackground}>
        <div className={styles.gradientBg}></div>
      </div>
      
      <div className={`${styles.cardContainer} ${styles.animateFadeIn}`}>
        {/* Decorative elements */}
        <div className={styles.cardShine}></div>
        
        {/* Logo Section with Animation */}
        <div className={`${styles.logoWrapper} ${styles.animateSlideDown}`}>
          <div className={styles.logoContainer}>
              <div className={styles.logoIcon}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* World/globe with airplane path */}
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" fill="none" />
                  <path d="M2,12 h20" stroke="white" strokeWidth="0.75" opacity="0.6" />
                  <path d="M12,2 v20" stroke="white" strokeWidth="0.75" opacity="0.6" />
                  <path d="M3.5,6 C6,8.5 9,10 12,10 S18,8.5 20.5,6" stroke="white" strokeWidth="0.75" opacity="0.6" />
                  <path d="M3.5,18 C6,15.5 9,14 12,14 S18,15.5 20.5,18" stroke="white" strokeWidth="0.75" opacity="0.6" />
                  {/* Airplane path */}
                  <path d="M18,8 L10,12 L12,14 L9,17 L7,15" stroke="white" strokeWidth="1.5" fill="none" />
                  <path d="M10,12 L6,10" stroke="white" strokeWidth="1.5" fill="none" />
                  <circle cx="18" cy="8" r="1.5" fill="white" />
                </svg>
              </div>
              <span className={styles.logoText}>
                Nomad.AI
              </span>
            </div>
          
          <div className={styles.taglineContainer}>
            <span className={`${styles.tagline} ${styles.animateFadeInUp}`}>
              {taglines[currentTextIndex]}
            </span>
          </div>
        </div>

        {/* Form Section with Animation */}
        {showForm && (
          <form 
            className={`${styles.loginForm} ${styles.animateFormAppear}`}
            onSubmit={handleSubmit}
          >
            <div className={`${styles.inputContainer} ${styles.animateSlideUp} ${styles.animationDelay100}`}>
              <span className={styles.inputIcon}>
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Username"
                className={styles.inputField}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className={styles.inputFocusEffect}></div>
            </div>
            
            <div className={`${styles.inputContainer} ${styles.animateSlideUp} ${styles.animationDelay200}`}>
              <span className={styles.inputIcon}>
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <input
                type="password"
                placeholder="Password"
                className={styles.inputField}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className={styles.inputFocusEffect}></div>
            </div>
            
            {error && (
              <div className={`${styles.errorMessage} ${styles.animateShakeError}`}>
                {error}
              </div>
            )}
            
            <button
              type="submit"
              className={`${styles.loginButton} ${styles.animateSlideUp} ${styles.animationDelay300}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className={styles.loadingSpinner}>
                  <svg className={styles.spinnerSvg} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  SIGNING IN
                </div>
              ) : (
                <>
                  <span className={styles.btnText}>SIGN IN</span>
                  <span className={styles.btnIcon}>
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </>
              )}
              <div className={styles.btnShine}></div>
            </button>
            
          </form>
        )}
        
        {/* Bottom decorative element */}
        <div className={styles.bottomGradient}></div>
      </div>
    </div>
  );
};

export default Login;