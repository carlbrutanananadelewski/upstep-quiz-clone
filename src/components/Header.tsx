import { Menu } from 'lucide-react';
import { Link } from 'wouter';

export function Header() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px 40px',
      position: 'relative',
      backgroundColor: '#fff'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <button style={{ padding: 0, display: 'flex', alignItems: 'center' }}>
          <Menu size={24} color="#333" />
        </button>
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={`${import.meta.env.BASE_URL}images/upstep-logo.svg`} 
            alt="Upstep Logo" 
            style={{ width: '124px' }}
          />
        </Link>
      </div>

      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: '#e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '4px solid #f9fafb'
        }}>
          <img 
            src={`${import.meta.env.BASE_URL}images/doctor-avatar.png`} 
            alt="Doctor" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      <div>
        <Link href="/" style={{
          fontSize: '13px',
          color: '#6b7280',
          fontWeight: 600,
          textDecoration: 'none'
        }}>
          Back to home
        </Link>
      </div>
    </header>
  );
}
