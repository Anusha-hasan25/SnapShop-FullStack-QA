// src/pages/Customize.jsx
import React, { useState } from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
export default function Customize() {
  const [step, setStep] = useState(1);

  return (
    <div className="page-container">
      <h1 className="page-title">Customize Your Jewellery</h1>
      <p className="page-subtitle">Design your perfect piece</p>
      
      <div className="customize-steps">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Select Type</div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Choose Material</div>
        <div className={`step ${step >= 3 ? 'active' : ''}`}>3. Add Gemstones</div>
        <div className={`step ${step >= 4 ? 'active' : ''}`}>4. Finalize</div>
      </div>
      
      <div className="customize-content">
        {step === 1 && (
          <div>
            <h2>Select Jewellery Type</h2>
            <div className="type-options">
              <button onClick={() => setStep(2)} className="type-option">
                <div>💍</div>
                <span>Ring</span>
              </button>
              <button onClick={() => setStep(2)} className="type-option">
                <div>📿</div>
                <span>Necklace</span>
              </button>
              <button onClick={() => setStep(2)} className="type-option">
                <div>✨</div>
                <span>Earrings</span>
              </button>
              <button onClick={() => setStep(2)} className="type-option">
                <div>💫</div>
                <span>Bracelet</span>
              </button>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div>
            <h2>Choose Material</h2>
            <div className="material-options">
              <button onClick={() => setStep(3)} className="material-option">
                <div>🥇</div>
                <span>Gold</span>
              </button>
              <button onClick={() => setStep(3)} className="material-option">
                <div>🥈</div>
                <span>Silver</span>
              </button>
              <button onClick={() => setStep(3)} className="material-option">
                <div>💎</div>
                <span>Platinum</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}