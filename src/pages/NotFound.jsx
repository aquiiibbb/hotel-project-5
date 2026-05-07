import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Page Not Found – 404"
        description="The page you are looking for does not exist at Crossroads Inn Hotel. Return to the homepage or browse our rooms and amenities."
        canonical="/404"
      />
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '60px 20px',
        fontFamily: 'inherit',
        background: '#f9f7f4'
      }}>
        <div style={{ marginBottom: '24px' }}>
          <span style={{ fontSize: '80px', lineHeight: 1 }}>🏨</span>
        </div>
        <h1 style={{
          fontSize: 'clamp(60px, 10vw, 120px)',
          fontWeight: 800,
          color: '#1a1a2e',
          lineHeight: 1,
          margin: '0 0 8px'
        }}>404</h1>
        <h2 style={{
          fontSize: 'clamp(18px, 3vw, 28px)',
          fontWeight: 600,
          color: '#4a4a4a',
          margin: '0 0 16px',
          letterSpacing: '0.5px'
        }}>Page Not Found</h2>
        <p style={{
          fontSize: '16px',
          color: '#777',
          maxWidth: '420px',
          margin: '0 0 40px',
          lineHeight: 1.6
        }}>
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              padding: '14px 32px',
              background: '#1a1a2e',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '0.5px'
            }}
          >
            ← Back to Home
          </button>
          <button
            onClick={() => navigate('/room')}
            style={{
              padding: '14px 32px',
              background: 'transparent',
              color: '#1a1a2e',
              border: '2px solid #1a1a2e',
              borderRadius: '6px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '0.5px'
            }}
          >
            View Rooms
          </button>
          <button
            onClick={() => navigate('/contact')}
            style={{
              padding: '14px 32px',
              background: 'transparent',
              color: '#1a1a2e',
              border: '2px solid #1a1a2e',
              borderRadius: '6px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '0.5px'
            }}
          >
            Contact Us
          </button>
        </div>
        <p style={{ marginTop: '48px', fontSize: '13px', color: '#aaa' }}>
          Crossroads Inn Hotel · 7050 Okeechobee Rd, Fort Pierce, FL 34945 · +1 772 465 8600
        </p>
      </div>
    </>
  );
}
