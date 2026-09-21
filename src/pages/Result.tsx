import { Link } from 'wouter';
import { useEffect, useState } from 'react';

export function Result() {
  const [analyzing, setAnalyzing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnalyzing(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      maxWidth: '600px',
      margin: '0 auto',
      minHeight: 'calc(100vh - 100px)',
      textAlign: 'center'
    }}>
      {analyzing ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <div className="spinner" style={{
            width: '48px',
            height: '48px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #70c9eb',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#333' }}>Analyzing your profile...</h2>
          <p style={{ color: '#777' }}>We are matching you with the perfect custom orthotics.</p>
        </div>
      ) : (
        <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#e6f7ff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#70c9eb',
            fontSize: '32px'
          }}>
            ✓
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#111' }}>You're all set!</h2>
          <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.6 }}>
            Based on your answers, we recommend the <strong>Upstep Custom Orthotics</strong>. 
            They are perfectly suited for your lifestyle and shoe choice.
          </p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/" style={{
              backgroundColor: '#111',
              color: '#fff',
              padding: '16px 40px',
              borderRadius: '99px',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              Proceed to checkout
            </Link>
          </div>
        </div>
      )}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .fade-in {
          animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
